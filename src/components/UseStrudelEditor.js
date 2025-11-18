import { useEffect, useRef, useState, useCallback } from "react";
import { useWaveform } from "./useWaveform";
import { StrudelMirror } from "@strudel/codemirror";
import { evalScope } from "@strudel/core";
import { drawPianoroll } from "@strudel/draw";
import { initAudioOnFirstClick, getAudioContext, webaudioOutput, registerSynthSounds } from "@strudel/webaudio";
import { registerSoundfonts } from "@strudel/soundfonts";
import { transpiler } from "@strudel/transpiler";
import console_monkey_patch from "../console-monkey-patch";
import { stranger_tune } from "../tunes";

export function useStrudelEditor(canvasRef, editorRef) {
    const [editor, setEditor] = useState(null);
    const [code, setCode] = useState(stranger_tune); 
    const [analyserNode, setAnalyserNode] = useState(null);
    const hasRun = useRef(false);

    const { analyser, waveform } = useWaveform(audioCtx, gainNode);

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;
        console_monkey_patch();

        if (!canvasRef.current || !editorRef.current) return;

        const canvas = canvasRef.current;
        canvas.width *= 2;
        canvas.height *= 2;
        const ctx = canvas.getContext("2d");
        ctx.scale(2, 2);

        const drawTime = [-2, 2];

        const newEditor = new StrudelMirror({
            root: editorRef.current,
            transpiler,
            drawTime,
            getTime: () => getAudioContext().currentTime,

            onDraw: (haps, time) => {
                drawPianoroll({ haps, time, ctx, drawTime, fold: 0 });
                ctx.textAlign = "left";
            },

            prebake: async () => {
                initAudioOnFirstClick();
                const loadModules = evalScope(
                    import("@strudel/core"),
                    import("@strudel/draw"),
                    import("@strudel/mini"),
                    import("@strudel/tonal"),
                    import("@strudel/webaudio"),
                );
                await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);
            },
        });
        setEditor(newEditor);
    }, [canvasRef, editorRef]);

    useEffect(() => {
        if (!editor) return;

        const audioCtx = getAudioContext();
        const gainNode = audioCtx.createGain();
        const analyserNode = audioCtx.createAnalyser();
        analyserNode.fftSize = 2048;

        gainNode.connect(analyserNode);
        analyserNode.connect(audioCtx.destination);

        editor.defaultOutput = gainNode;

        setAnalyser(analyserNode);
    }, [editor]);


    useEffect(() => {
        if (editor) {
            editor.setCode(code);
        }
    }, [code, editor]);


    const getWaveform = useCallback(() => {
        if (!analyser) return [];
        const dataArray = new Float32Array(analyser.fftSize);
        analyser.getFloatTimeDomainData(dataArray);
        return Array.from(dataArray);
    }, [analyser]);

    return { editor, code, setCode, getWaveform };

};
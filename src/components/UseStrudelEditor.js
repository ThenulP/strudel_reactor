import { useEffect, useRef, useState } from "react";
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

    const hasRun = useRef(false);

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;
        console_monkey_patch();

        if (!canvasRef.current || !editorRef.current) return;

        const canvas = canvasRef.current;
        canvas.width *= 2;
        canvas.height *= 2;
        const ctx = canvas.getContext("2d");

        const drawTime = [-2, 2];

        const newEditor = new StrudelMirror({
            defaultOutput: webaudioOutput,
            getTime: () => getAudioContext().currentTime,
            transpiler,
            root: editorRef.current,
            drawTime,
            onDraw: (haps, time) => {
                drawPianoroll({ haps, time, ctx, drawTime, fold: 0 })
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
        if (editor) {
            editor.setCode(code);
        }
    }, [code, editor]);

    return { editor, code, setCode };

};
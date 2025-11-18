
import { useRef, useEffect } from "react";

export function useWaveform(audioContext, sourceNode, fftSize = 2048) {
    const analyserRef = useRef(null);
    const dataRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        if (!audioContext || !sourceNode) return;

        const analyser = audioContext.createAnalyser();
        analyser.fftSize = fftSize;

        sourceNode.connect(analyser);
        analyserRef.current = analyser;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        dataRef.current = dataArray;

        const tick = () => {
            analyser.getByteTimeDomainData(dataArray);
            rafRef.current = requestAnimationFrame(tick);
        };

        tick();

        return () => {
            cancelAnimationFrame(rafRef.current);
            try {
                sourceNode.disconnect(analyser);
            } catch { }
        };
    }, [audioContext, sourceNode, fftSize]);

    return {
        analyser: analyserRef.current,
        waveform: dataRef.current,
    };
}
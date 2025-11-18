import { useEffect, useRef, useState } from "react";
import { useStrudelEditor } from "./UseStrudelEditor";
import { usePreprocessor } from "./preprocessor/usePreprocessor";
import ControlButtons from "./controlButtons/ControlButtons";
import InstrControlP from "./instrumentControls/InstrumentControlP";
import TextArea from "./preprocessor/TextArea";
import PianoRollCanvas from "./PianoRollCanvas";
import Editor from "./Editor";
import Waveform from "./Waveform"




export default function StrudelDemo() {
    const canvasRef = useRef(null);
    const editorRef = useRef(null);

    const { editor, code, setCode, getWaveform } = useStrudelEditor(canvasRef, editorRef);
    const { instruments, updateInstrument, muteInstrument } = usePreprocessor(code, setCode, editor);

    const [wave, setWave] = useState([]);

    useEffect(() => {
        let raf;

        function update() {
            const data = getWaveform(); 
            if (data.length > 0) setWave(data);

            raf = requestAnimationFrame(update);
        }

        if (editor) update(); 

        return () => cancelAnimationFrame(raf);
    }, [editor, getWaveform]);

    return (
        <div>
            <h2>Strudel Demo</h2>
            <main className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <TextArea code={code} setCode={setCode} />
                    </div>
                    <div className="col-md-4">
                        <ControlButtons editor={editor} code={code} setCode={setCode} />
                        <Waveform data={wave} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Editor ref={editorRef} />
                    </div>
                    <div className="col-md-4">
                        <InstrControlP instr={instruments} updInst={updateInstrument} muteInstr={muteInstrument} />
                    </div>
                </div>
                <PianoRollCanvas ref={ canvasRef} />
            </main>
        </div>
    );
}
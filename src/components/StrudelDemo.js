import { useRef } from "react";
import { useStrudelEditor } from "./UseStrudelEditor";
import { usePreprocessor } from "./preprocessor/usePreprocessor";
import ControlButtons from "./controlButtons/ControlButtons";
import InstrControlP from "./instrumentControls/InstrumentControlP";
import TextArea from "./preprocessor/TextArea";
import PianoRollCanvas from "./PianoRollCanvas";
import Editor from "./Editor";




export default function StrudelDemo() {
    const canvasRef = useRef(null);
    const editorRef = useRef(null);

    const { editor, code, setCode } = useStrudelEditor(canvasRef, editorRef);
    const { instruments, updateInstrument, muteInstrument } = usePreprocessor(code, setCode, editor);


    

    /*const processText = (text) => {
        const replacement = radio === "hush" ? "_" : "";
        return text.replaceAll("<p1_Radio>", replacement);
    };

    const handleProcess = () => {
        if (!editor) return;
        const replaced = processText(procText);
        editor.setCode(replaced);
    };

    const downloadTextFile = (text, filename = "strudel_code.txt") => {
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.click();

        URL.revokeObjectURL(url);
    };

    const handleLoadClick = () => {
        fileInputRef.current.click();

    };

    const handleFileLoad = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            const text = e.target.result;
            setProcText(text);
            if (editor) {
                const replaced = processText(text);
                editor.setCode(replaced);
            }

            
        };

        reader.readAsText(file); 
  
    };

    const handlePlay = () => editor?.evaluate();
    const handleStop = () => editor?.stop();
    const handleSave = () => downloadTextFile(procText, "strudel_code.txt");
    const handleProcAndPlay = () => {
        handleProcess();
        handlePlay();
    };*/

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
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Editor ref={editorRef} />
                    </div>
                    <div className="col-md-4">
                        {/*<RadioControls editor={editor} code={code} setCode={setCode} name="p1" />*/}
                        <InstrControlP instr={instruments} updInst={updateInstrument} muteInstr={muteInstrument} />
                    </div>
                </div>
                <PianoRollCanvas ref={ canvasRef} />
            </main>
        </div>
    );
}
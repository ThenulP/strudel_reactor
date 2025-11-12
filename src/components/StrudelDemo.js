import { useState,useRef, useEffect } from "react";
import { useStrudelEditor } from "./UseStrudelEditor";
import ControlButtons from "./controlButtons/ControlButtons";
import RadioControls from "./instrumentControls/RadioControls";
import Preprocessor from "./Preprocessor";
import PianoRollCanvas from "./PianoRollCanvas";
import Editor from "./Editor";



export default function StrudelDemo() {
    const editor = useStrudelEditor("roll", "editor");
    const [radio, setRadio] = useState("on");
    

    

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

    // Whenever radio changes, automatically re-process + play
    useEffect(() => {
        if (editor) {
            const replacement = radio === "hush" ? "_" : "";
            procText.replaceAll("<p1_Radio>", replacement);

            ProcAndPlay.handleProcAndPlay(editor, procText);
        }
    }, [radio]);

    return (
        <div>
            <h2>Strudel Demo</h2>
            <main className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <Preprocessor editor={editor} />
                    </div>
                    <div className="col-md-4">
                        <ControlButtons editor={editor} preprocess={Preprocessor} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Editor />
                    </div>
                    <div className="col-md-4">
                        <RadioControls value={radio} onChange={setRadio} name="p1" />
                    </div>
                </div>
                <PianoRollCanvas />
            </main>
        </div>
    );
}
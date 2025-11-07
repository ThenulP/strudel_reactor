import { useState, useEffect } from "react";
import { useStrudelEditor } from "./UseStrudelEditor";
import ControlButtons from "./ControlButtons";
import RadioControls from "./RadioControls";
import Preprocessor from "./Preprocessor";
import PianoRollCanvas from "./PianoRollCanvas";
import Editor from "./Editor";
import { stranger_tune } from "../tunes";

export default function StrudelDemo() {
    const editor = useStrudelEditor("roll", "editor");
    const [procText, setProcText] = useState(stranger_tune);
    const [radio, setRadio] = useState("on");

    const processText = (text) => {
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

    const handlePlay = () => editor?.evaluate();
    const handleStop = () => editor?.stop();
    const handleSave = () => downloadTextFile(procText, "strudel_code.txt");
    const handleProcAndPlay = () => {
        handleProcess();
        handlePlay();
    };

    // Whenever radio changes, automatically re-process + play
    useEffect(() => {
        if (editor) handleProcAndPlay();
    }, [radio]);

    return (
        <div>
            <h2>Strudel Demo</h2>
            <main className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <Preprocessor value={procText} onChange={setProcText} />
                    </div>
                    <div className="col-md-4">
                        <ControlButtons
                            onProcess={handleProcess}
                            onProcAndPlay={handleProcAndPlay}
                            onPlay={handlePlay}
                            onStop={handleStop}
                            onSave={handleSave}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Editor />
                    </div>
                    <div className="col-md-4">
                        <RadioControls value={radio} onChange={setRadio} />
                    </div>
                </div>
                <PianoRollCanvas />
            </main>
        </div>
    );
}
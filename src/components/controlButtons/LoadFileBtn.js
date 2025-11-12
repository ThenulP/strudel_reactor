import  ControlButton  from "../../componentTemplates/ControlButton";
import  Preprocess  from "../Preprocessor";
import { useRef, useState } from "react";

const LoadFileBtn = ({ editor }) => {

    const [procText, setProcText] = useState('');

    const fileInputRef = useRef(null);

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
                const replaced = Preprocess.processText(procText);
                editor.setCode(replaced);
            }


        };

        reader.readAsText(file);

    };

    return (

        <div className="no-borders-margins">
            <ControlButton
                onAction={handleLoadClick}
                name="Load file"
            />

            <input
                type="file"
                accept=".txt"
                ref={fileInputRef}
                onChange={handleFileLoad}
                style={{ display: "none" }}
            />
        </div>


    );
};

export default LoadFileBtn;


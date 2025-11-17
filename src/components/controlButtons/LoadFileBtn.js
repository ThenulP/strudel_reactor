import ControlButton from "../../componentTemplates/ControlButton";
//import { usePreprocessor } from "../preprocessor/usePreprocessor";
import { useRef, useState } from "react";

const LoadFileBtn = ({ setCode }) => {

    const [procText, setProcText] = useState('');
    //const preprocess = usePreprocessor(editor); 
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
            setCode(procText);


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


import  ControlButton  from "../../componentTemplates/ControlButton";
import { useState } from "react";

const LoadFileBtn = ({ preprocess }) => {

    const [procText, setProcText] = useState('');

    const downloadTextFile = () => {
        setProcText(preprocess.getText());
        const blob = new Blob([procText], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "strudel_code.txt";
        link.click();

        URL.revokeObjectURL(url);
    };

    return (

        <ControlButton
            onAction={downloadTextFile}
            name="Save file"
        />
    );
};

export default LoadFileBtn;


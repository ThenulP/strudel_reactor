
import { useState } from "react";
import { stranger_tune } from "../../tunes";
export function usePreprocessor(editor) {
    const [procText, setProcText] = useState(stranger_tune);

    const processTextOnChange = (e) => {
        if (!editor) return;
        const newText = e.target.value;
        setProcText(newText);
        editor.setCode(newText);
    };

    const updateEditor = (text=procText) => {
        if (!editor) return;
        setProcText(text);
        editor.setCode(text);     
    };

    return {
        procText,
        setText: setProcText,
        updateEditor,
        processTextOnChange
    };
}
import { usePreprocessor } from "../preprocessor/usePreprocessor";
import { useState, useEffect } from "react";
export default function RadioControls({ editor, name }) {
    const preprocess = usePreprocessor(editor);
    const [checked, setChecked] = useState(true);
    const [procText, setProcText] = useState('');

    const handleToggle = () => {
        const newChecked = !checked;
        setChecked(newChecked);
    };

    useEffect(() => {
        if (preprocess?.procText) {
            setProcText(preprocess.procText);
        }
    }, [preprocess?.procText]);

    useEffect(() => {
        if (editor && preprocess?.updateEditor) {
            const symbol = checked ? "" : "_";
            const newText = procText.replaceAll("<p1_Radio>", symbol);
            preprocess.updateEditor(newText);
            editor?.evaluate();
        }
    }, [checked, editor,preprocess, preprocess?.updateEditor, procText]);



    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={`p1${name}`}
                name={`p1${name}`}
                value={checked}
                onChange={handleToggle}
                />

            <label
                className="form-check-label"
                id="radioLabel"
                htmlFor={`p1${name}`}>
                {checked ? `${name} ON` : `${name} OFF`}
            </label>
        </div>
    );
}
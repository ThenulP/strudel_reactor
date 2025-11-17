
import { useState, useEffect } from "react";
export default function RadioControls({ code, setCode, editor, name }) {
    const [checked, setChecked] = useState(true);
    const [localText, setLocalText] = useState('');

    const handleToggle = () => {
        const newChecked = !checked;
        setChecked(newChecked);
    };

    useEffect(() => {
        if (code !== undefined && code !== null) {
            setLocalText(code);
        }
    }, [code]);

    useEffect(() => {
        if (!editor) return;
        if (!localText) return;

        const symbol = checked ? "" : "_";
        const newText = localText.replaceAll("<p1_Radio>", symbol);

        setCode(newText);      
        editor?.evaluate();    
    }, [checked, localText, setCode, editor]);


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
                htmlFor={`p1${name}`}>
                {checked ? `${name} ON` : `${name} OFF`}
            </label>
        </div>
    );
}

import { useState } from "react";
import { stranger_tune } from "../tunes";
export default function Preprocessor({ editor }) {
    
    const [procText, setProcText] = useState(stranger_tune);

    const processText = (e) => {
        if (!editor) return;
        setProcText(e.target.value)
        const replaced = procText;
        editor.setCode(replaced);

    };

    const setText = (text) => {
        setProcText(text);
    }

    const getText = () => {
        return procText;
    }

    const updateEditor = (text) => {
        if (editor) {
            setText(text);
            const replaced = processText(text);
            editor.setCode(replaced);
        }
    }

    return (
        <div>
            <label htmlFor="proc" className="form-label">Text to preprocess:</label>
            <textarea
                className="form-control"
                id="proc"
                rows="15"
                value={procText}
                onChange={(e) => processText(e)}
            />
        </div>
    );
}
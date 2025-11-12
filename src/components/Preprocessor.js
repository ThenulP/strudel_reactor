
import { useState } from "react";

export default function Preprocessor({ editor, text }) {
    
    const [procText, setProcText] = useState(text);

    const processText = (e) => {
        if (!editor) return;
        setProcText(e.target.value)
        const replaced = procText;
        editor.setCode(replaced);

    };


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

import { usePreprocessor } from "./usePreprocessor";
export default function Preprocessor({ editor }) {

    const preprocess = usePreprocessor(editor);


    return (
        <div>
            <label htmlFor="proc" className="form-label">Text to preprocess:</label>
            <textarea
                className="form-control"
                id="proc"
                rows="15"
                value={preprocess.procText}
                onChange={(e) => preprocess.processTextOnChange(e)}
            />
        </div>
    );
}
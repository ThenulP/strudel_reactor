
export default function TextArea({ code, setCode }) {


    return (
        <div>
            <label htmlFor="textArea" className="form-label">Text to preprocess:</label>
            <textarea
                className="form-control"
                id="textArea"
                rows="15"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
        </div>
    );
}
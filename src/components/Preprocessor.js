export default function Preprocessor({ value, onChange }) {
    return (
        <div>
            <label htmlFor="proc" className="form-label">Text to preprocess:</label>
            <textarea
                className="form-control"
                id="proc"
                rows="15"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
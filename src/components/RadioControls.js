export default function RadioControls({ value, onChange }) {
    return (
        <div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="p1"
                    value="on"
                    id="flexRadioDefault1"
                    checked={value === "on"}
                    onChange={() => onChange("on")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    p1: ON
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="p1"
                    value="hush"
                    id="flexRadioDefault2"
                    checked={value === "hush"}
                    onChange={() => onChange("hush")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    p1: HUSH
                </label>
            </div>
        </div>
    );
}
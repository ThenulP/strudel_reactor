
import { useState } from "react";
export default function RadioControls({ value, onChange, name }) {

    const [isChecked, setIsChecked] = useState(value === "on"); 

    const handleChange = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange(newChecked ? "on" : "hush");
    };

    //return (
    //    <div>
    //        <div className="form-check">
    //            <input
    //                className="form-check-input"
    //                type="radio"
    //                name="p1"
    //                value="on"
    //                id="flexRadioDefault1"
    //                checked={value === "on"}
    //                onChange={() => onChange("on")}
    //            />
    //            <label className="form-check-label" htmlFor="flexRadioDefault1">
    //                p1: ON
    //            </label>
    //        </div>
    //        <div className="form-check">
    //            <input
    //                className="form-check-input"
    //                type="radio"
    //                name="p1"
    //                value="hush"
    //                id="flexRadioDefault2"
    //                checked={value === "hush"}
    //                onChange={() => onChange("hush")}
    //            />
    //            <label className="form-check-label" htmlFor="flexRadioDefault2">
    //                p1: HUSH
    //            </label>
    //        </div>
    //    </div>
    //);

    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="radioSwitch"
                name="p1"
                checked={isChecked}
                onChange={handleChange}
                />

            <label
                className="form-check-label"
                id="radioLabel"
                htmlFor="radioSwitch">
                {isChecked ? { name } + " ON" : { name }+" OFF"}
            </label>
        </div>
    );
}
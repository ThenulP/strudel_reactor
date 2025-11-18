
import { useState, useEffect } from "react";
export default function RadioControls({ instrName, muteInstr }) {
    const [checked, setChecked] = useState(true);

    const handleToggle = () => {
        const newChecked = !checked;
        setChecked(newChecked);
    };

    useEffect(() => {
        muteInstr(instrName,checked);
    }, [checked, instrName, muteInstr]);


    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={`${instrName}`}
                name={`${instrName}`}
                value={checked}
                onChange={handleToggle}
                />

            <label
                className="form-check-label"
                htmlFor={`${instrName}`}>
                {checked ? `${instrName} ON` : `${instrName} OFF`}
            </label>
        </div>
    );
}
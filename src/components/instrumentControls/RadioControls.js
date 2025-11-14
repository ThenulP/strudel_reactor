
import { useState, useEffect } from "react";
export default function RadioControls({ editor, preprocess, name }) {

    const [radio, setRadio] = useState("on");
    const [checked, setChecked] = useState(radio === "on");
    const [procText, setProcText] = useState('');

    const handleToggle = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        setRadio(newChecked ? "on" : "hush");
    };

    useEffect(() => {
        setProcText(preprocess.getText());
        if (editor) {
            var symbol = "";
            if (checked) {
                setChecked(false);
                setRadio("hush")
                symbol = "_";
            } else {
                setChecked(true);
                setRadio("on")
                symbol = "";
            }

            const replacement = symbol;


            procText.replaceAll("<p1_Radio>", replacement);

            preprocess.updateEditor(procText);
        }
    }, [radio,editor,preprocess]);

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
                value={checked}
                onChange={handleToggle}
                />

            <label
                className="form-check-label"
                id="radioLabel"
                htmlFor="radioSwitch">
                {checked ? { name } + " ON" : {name} +  " OFF"}
            </label>
        </div>
    );
}
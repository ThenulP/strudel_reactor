
import {useRenderer } from "./useRenderer"
import TransformationDropdown from "./TransformationDropdown";

export default function InstrControlP({ instr, updInstr }) {

    const renderInstruments = useRenderer(instr, updInstr);


    return (
        <div className="card" id="instrControlP">

            <div>
                {renderInstruments()}
            </div>     
        </div>
    );
}
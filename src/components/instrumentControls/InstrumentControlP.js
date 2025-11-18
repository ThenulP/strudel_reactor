
import {useRenderer } from "./useRenderer"

export default function InstrControlP({ instr, updInstr, muteInstr }) {

    const renderInstruments = useRenderer(instr, updInstr, muteInstr);


    return (
        <div className="card" id="instrControlP">
            <div>
                <h2>Instrument Controls</h2>
            </div>
            <div>
                {renderInstruments()}
            </div>     
        </div>
    );
}
import { useCallback } from 'react';

export default function InstrControlP({ instr, updInstr }) {

    const renderInstruments = useCallback(() => {
        if (!instr) return null;

        return instr.map((inst) => (
            <div key={inst.name}>
                <h3>{inst.name}</h3>

                {Object.entries(inst.params).map(([param, value]) => (
                    <div key={param}>
                        <label>{param}</label>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) =>
                                updInstr(inst.name, {
                                    [param]: e.target.value,
                                })
                            }
                        />
                    </div>
                ))}
            </div>
        ));
    }, [instr, updInstr]);


    return (
        <div className="card" id="instrControlP">
            {renderInstruments()}
        </div>
    );
}
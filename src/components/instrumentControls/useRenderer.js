import { useCallback } from 'react';
import TransformationDropdown from "./TransformationDropdown";
import MuteInstr from "./MuteInstr";
export function useRenderer(instr, updInstr, muteInstr) {

    const renderInstruments = useCallback(() => {
        if (!instr) return null;

        return (
            <div className="container-fluid">
                {instr.map((inst) => (
                    <div key={inst.name} className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title mb-0">{inst.name}</h5>
                        </div>
                        <div className="card-body">
                            <MuteInstr instrName={inst.name} muteInstr={muteInstr } />
                            <div className="row">
                                {Object.entries(inst.params).map(([param, value]) => (
                                    <div key={param} className="col-md-4 col-sm-6 mb-2">
                                        <label className="form-label small fw-bold">{param}</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
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
                            <TransformationDropdown/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }, [instr, updInstr]);


    return renderInstruments;
}
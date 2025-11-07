export default function ControlButtons({ onProcess, onProcAndPlay, onPlay, onStop, onSave }) {
    return (
        <div className="d-flex flex-column gap-2">
            <div className="d-flex gap-2">
                <button onClick={onProcess} className="btn btn-outline-primary flex-fill">
                    Preprocess
                </button>
                <button onClick={onProcAndPlay} className="btn btn-outline-primary flex-fill">
                    Proc & Play
                </button>
            </div>
            <div className="d-flex gap-2">
                <button onClick={onPlay} className="btn btn-outline-success flex-fill">
                    Play
                </button>
                <button onClick={onStop} className="btn btn-outline-danger flex-fill">
                    Stop
                </button>
            </div>
            <div className="d-flex gap-2">
                <button onClick={onSave} className="btn btn-outline-secondary flex-fill">
                    Save Preprocess
                </button>
                <button  className="btn btn-outline-secondary flex-fill">
                    Load Preprocess
                </button>
            </div>
        </div>
    );
}
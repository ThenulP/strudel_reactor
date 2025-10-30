export default function ControlButtons({ onProcess, onProcAndPlay, onPlay, onStop }) {
    return (
        <nav>
            <button onClick={onProcess} className="btn btn-outline-primary">Preprocess</button>
            <button onClick={onProcAndPlay} className="btn btn-outline-primary">Proc & Play</button>
            <br />
            <button onClick={onPlay} className="btn btn-outline-primary">Play</button>
            <button onClick={onStop} className="btn btn-outline-primary">Stop</button>
        </nav>
    );
}
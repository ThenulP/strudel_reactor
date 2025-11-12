export default function ControlButton({onAction, name}) {
    return (
        <button onClick={onAction} className="btn btn-outline-primary flex-fill">
            {name}
        </button>
    );
}
import  ControlButton  from "../../componentTemplates/ControlButton";

const StopBtn = ({ editor }) => {
    const handleStop = () => editor?.stop();

    return (
        <ControlButton
            onAction={handleStop}
            name="Stop"
        />
    );
};

export default StopBtn;


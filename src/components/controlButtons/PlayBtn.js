import ControlButton from "../../componentTemplates/ControlButton";

const PlayBtn = ({ editor }) => {
    const handlePlay = () => {
        console.log("play");
        editor?.evaluate();
    }

    return (
        <ControlButton
            onAction={handlePlay}
            name="Play"
        />
    );
};

export default PlayBtn;

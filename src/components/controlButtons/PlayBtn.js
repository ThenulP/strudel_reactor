import  ControlButton from "../../componentTemplates/ControlButton";

const PlayBtn = ({ editor }) => {
    const handlePlay = (input = editor) => input?.evaluate();

    return (
        <ControlButton
            onAction={handlePlay}
            name="Play"
        />
    );
};

export default PlayBtn;

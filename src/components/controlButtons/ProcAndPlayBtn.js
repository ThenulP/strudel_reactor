import  ControlButton  from "../../componentTemplates/ControlButton";
import  PlayBtn  from "./PlayBtn";

const ProcAndPlayBtn = ({ editor, preprocess }) => {

    const handleProcAndPlay = () => {
        preprocess.processText();
        PlayBtn.handlePlay(editor);
    };


    return (
        <ControlButton
            onAction={handleProcAndPlay}
            name="Proc & Play"
        />
    );
};

export default ProcAndPlayBtn;


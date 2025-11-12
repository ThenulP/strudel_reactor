import  ControlButton  from "../../componentTemplates/ControlButton";
import  Preprocess  from "../Preprocessor";
import  PlayBtn  from "./PlayBtn";

const ProcAndPlayBtn = ({ editor, text }) => {

    const handleProcAndPlay = () => {
        Preprocess.processText(text, editor);
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


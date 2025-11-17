import ControlButton from "../../componentTemplates/ControlButton";
//import { usePreprocessor } from "../preprocessor/usePreprocessor";
//import  PlayBtn  from "./PlayBtn";

const ProcAndPlayBtn = ({ editor }) => {
    //const preprocess = usePreprocessor(editor); 

    const handleProcAndPlay = () => {
        //preprocess.updateEditor();
        editor?.evaluate();
    };


    return (
        <ControlButton
            onAction={handleProcAndPlay}
            name="Proc & Play"
        />
    );
};

export default ProcAndPlayBtn;


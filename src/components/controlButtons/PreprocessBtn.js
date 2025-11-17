import ControlButton from "../../componentTemplates/ControlButton";
//import { usePreprocessor } from "../preprocessor/usePreprocessor";

const PreprocessBtn = ({ editor }) => {
    //const preprocess = usePreprocessor(editor);


    const handleProcess = () => {
        //preprocess.updateEditor();
    };

    return (
        <ControlButton
            onAction={handleProcess}
            name="Preprocess"
        />
    );
};

export default PreprocessBtn;


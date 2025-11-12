import ControlButton from "../../componentTemplates/ControlButton";

const PreprocessBtn = ({ preprocess }) => {

    const handleProcess = () => {
        preprocess.preprocessText();
    };

    return (
        <ControlButton
            onAction={handleProcess}
            name="Preprocess"
        />
    );
};

export default PreprocessBtn;


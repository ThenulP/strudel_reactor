import  ControlButton  from "../../componentTemplates/ControlButton";

const PreprocessBtn = ({ editor, text }) => {

    const handleProcess = (inputText = text, inputEditor = editor) => {
        if (!inputEditor) return;
        const replaced = inputText;
        inputEditor.setCode(replaced);
    };

    return (
        <ControlButton
            onAction={handleProcess}
            name="Preprocess"
        />
    );
};

export default PreprocessBtn;


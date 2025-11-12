import  ControlButton  from "../../componentTemplates/ControlButton";

const LoadFileBtn = ({ text }) => {
    const downloadTextFile = () => {
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "strudel_code.txt";
        link.click();

        URL.revokeObjectURL(url);
    };

    return (

        <ControlButton
            onAction={downloadTextFile}
            name="Save file"
        />
    );
};

export default LoadFileBtn;


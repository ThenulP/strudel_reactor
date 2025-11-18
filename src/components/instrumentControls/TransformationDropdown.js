import  transformers  from "./transformers.json"
import TransformerBtn from "../../componentTemplates/TransformerBtn.js";
export default function Dropdown() {


    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    {transformers.map((trans, idx) => {
                        return <TransformerBtn key={idx} id={idx} name={trans} />;
                    })}
                </div>
            </div>
        </nav>
    );
}
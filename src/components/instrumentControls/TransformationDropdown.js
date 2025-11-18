import  transformers  from "./transformers.json"

export default function TransformationDropdown() {


    return (
        <div className="dropdown">
            <button
                className="btn btn-sm btn-outline-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Add Transformers
            </button>
            <ul className="dropdown-menu">
                {transformers.map((trans, idx) => (
                    <li key={idx}>
                        <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => console.log('Selected:', trans)}
                        >
                            {trans}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default function TransformerCard({name, idx}) {
    return (
        <div className="input-group">
            <button type="button" id={ idx} className="btn btn-outline-secondary">{`${name} `}</button>
        </div>
    );
}
import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderA = `${props.placeholder}`;

    return(
        <div className="campo-texto">
            <input placeholder={placeholderA} />
        </div>
    )
}

export default CampoTexto;
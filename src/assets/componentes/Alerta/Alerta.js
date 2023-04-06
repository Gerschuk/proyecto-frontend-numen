import "./alerta.css";
function Alerta(contenido) {
    return (
        <>
            <div className="alerta alert alert-primary alert-dismissible fade show" role="alert">
                {contenido.texto}
                <button type="button" className="btn-close me-5" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}

export default Alerta;
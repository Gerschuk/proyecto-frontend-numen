import "./boton.css";

//Tipos de iconos
const iconos = {
    "buscar": <i className="bi bi-search"></i>,
    "login": <i className="bi bi-person"></i>,
    "carrito": <i className="bi bi-cart"></i>,
    "facebook": <i className="bi bi-facebook"></i>,
    "twitter": <i className="bi bi-twitter"></i>,
    "whatsapp": <i className="bi bi-whatsapp"></i>,
    "telegram": <i className="bi bi-telegram"></i>,
}

function Boton(contenido) {
    console.log(contenido);
    let boton = null;

    if (contenido.circulo && contenido.icono === "carrito") {
        boton = <button type="button" className="btn boton-redondo position-relative btn-lg">
            {iconos[contenido.icono]}
            <span class="position-absolute top-15 start-100 translate-middle badge rounded-pill bg-secondary">{contenido.cantArticulos}</span>
        </button>
    } else if (contenido.circulo) {
        boton = <button type="button" className="btn boton-redondo btn-lg">{iconos[contenido.icono]}</button>;
    } else {
        boton = <button type="button" className="btn btn-primary btn-sm">{contenido.texto}</button>;
    }

    return boton;

}
export default Boton;
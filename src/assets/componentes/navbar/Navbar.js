import "./navbar.css";

function Navbar({ contenido }) {
    const listaEnlaces = contenido.map(enlace => {
        return (
            <li className="nav-item" key={enlace.id}>
                <a className="nav-link" href={enlace.url}>{enlace.nombre}</a>
            </li>
        )
    });

    return (
        <nav>
            <ul className="nav">
                {listaEnlaces}
            </ul>
        </nav>
    )

}

export default Navbar;
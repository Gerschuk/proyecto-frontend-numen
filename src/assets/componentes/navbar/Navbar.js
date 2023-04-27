import "./navbar.css";
import logo from "../../imagenes/logo.png";
import Accion from "../accion/Accion";

function Navbar({ contenido }) {
    const listaEnlaces = contenido.map(enlace => {
        return (
            <li className="nav-item" key={enlace.id}>
                <Accion texto={enlace.texto} url={enlace.url} />
            </li>
        )
    });

   return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/index">
                    <img className="img-fluid" src={logo} alt="Fashion Trends logo"></img>
                </a>
                <div className="d-flex flex-row-reverse">
                    <button className="navbar-toggler ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   <Accion tipo="boton" circulo={true} icono="carrito"  cantProductos="4" />
                   <Accion tipo="boton" circulo={true} icono="buscar" />
                   <Accion tipo="boton" circulo={true} icono="login" />
                    
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {listaEnlaces}
                    </ul>
                </div>
           </div>
       </nav>
       
    ) 

}

export default Navbar;
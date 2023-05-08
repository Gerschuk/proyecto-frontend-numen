import Accion from "../accion/Accion";
import "./home.css";

function Home(contenido) {
    return (

        <div className="home row">
            <div className="contenido d-flex flex-column justify-content-end align-items-center text-center">
                <h1 className="titulo">{contenido.titulo}</h1>
                <p>{contenido.parrafo}</p>
                <Accion tipo="boton" texto={contenido.textoBoton} />
            </div>
        </div>
    )
}

export default Home;
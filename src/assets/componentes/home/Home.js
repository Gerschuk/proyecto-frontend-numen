import Accion from "../accion/Accion";
import "./home.css";

function Home(contenido) {
    return (

        <div className="home row">
            <div className="contenido d-flex flex-column justify-content-end align-items-center text-center">
                <h1 className="titulo">{contenido?.data?.titulo}</h1>
                <p>{contenido?.data?.texto}</p>
                <Accion tipo="boton" texto={contenido?.data?.textoBoton} />
            </div>
        </div>
    )
}

export default Home;
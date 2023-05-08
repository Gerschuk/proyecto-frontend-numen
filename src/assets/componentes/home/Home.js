import Accion from "../accion/Accion";
import "./home.css";

function Home(contenido) {

    const data = contenido?.data?.find(item => item.componente === "home");

    console.log(data)
    return (

        <div className="home row">
            <div className="contenido d-flex flex-column justify-content-end align-items-center text-center">
                <h1 className="titulo">{data?.titulo}</h1>
                <p>{data?.texto}</p>
                <Accion tipo="boton" texto={data?.textoBoton} />
            </div>
        </div>
    )
}

export default Home;
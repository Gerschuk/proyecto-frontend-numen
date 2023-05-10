import Accion from "../accion/Accion";
import "./partner.css";


function Partner(contenido) {

    console.log(contenido)

    return (
        <section className="partner text-center my-5">
            <div className="tonalidad d-flex flex-column justify-content-evenly align-items-center">
                <h2>{contenido?.data?.titulo}</h2>
                <img className="pt-5" src={contenido?.data?.img} alt="Caritas logo" />
                <p className="pt-2">{contenido?.data?.texto}</p>
                <Accion tipo="boton" texto={contenido?.data?.textoBoton} />
            </div>
        </section>
    )
}

export default Partner;
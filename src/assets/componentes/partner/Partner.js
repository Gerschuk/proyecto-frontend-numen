import Accion from "../accion/Accion";
import "./partner.css";


function Partner(content) {

    const cont = content?.data?.find(item => item.componente === "partner");
    console.log(cont)
    return (
        <section className="partner text-center my-5">
            <div className="tonalidad d-flex flex-column justify-content-evenly align-items-center">
                <h2>{cont?.titulo}</h2>
                <img className="pt-5" src={cont?.img} alt="Caritas logo" />
                <p className="pt-2">{cont?.texto}</p>
                <Accion tipo="boton" texto={cont?.textoBoton} />
            </div>
        </section>
    )
}

export default Partner;
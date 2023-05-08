import "./beneficios.css";
import Beneficio from "../beneficio/Beneficio";


const iconos = {
    devolucion: <i className="bi bi-arrow-counterclockwise"></i>,
    calidad: <i className="bi bi-person-fill-exclamation"></i>,
    envio: <i className="bi bi-calendar2-date"></i>,
    atc: <i className="bi bi-chat-left-heart"></i>,
    pagos: <i className="bi bi-credit-card-2-front"></i>
}
function Beneficios(contenido) {

    const beneficios = contenido?.data?.find(item => item.componente === "beneficios")?.beneficios;

    return (
        <section className="py-5 mt-4 text-center">
            <h2 className="titulo">Porque elegir <span className="color-primario">nuestra tienda premium</span></h2>
            <div className="pt-4 row justify-content-evenly">
                {
                    beneficios?.map((item, index) => {
                        return (
                            <Beneficio
                                key={index}
                                icono={iconos[item.icono]}
                                titulo={item.titulo}
                                texto={item.texto}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Beneficios;
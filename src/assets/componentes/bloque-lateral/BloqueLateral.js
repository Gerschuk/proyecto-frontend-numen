import "./bloque-lateral.css";
import CheckInformacion from "../check-informacion/CheckInformacion";
import Accion from "../accion/Accion"

/* El componente bloque lateral,  muestra texto al lado de una imagen:

  Props que requiere:
    Por defecto el texto se encuentra del lado izquierdo de la imagen, en caso de cambiar el orden y que la imagen se encuentre del lado izquierdo del texto, pasarle la prop direccion = "izquierda"
    
    titulo="Titulo a mostrar"

    texto="Contenido a mostrar"

    checks = null -> No muestra parrafos con tilde
    checks = [] -> Muestra cada posición del array en un parrafo con tilde

    textoBoton = "Texto del botón"

    imagen = url

  
*/

function BloqueLateral(contenido) {

    const conten = contenido?.data?.find(item => item.componente === contenido.bloque);
    console.log("contenido:", conten)
    
    const arrTitulo = conten?.titulo.split(" ");
    const strNonColor = arrTitulo?.slice(0, arrTitulo.length / 2).join(" ") + " ";
    /* Obtiene del titulo las palabras a mostrar de color */
    const strColor = arrTitulo?.slice(arrTitulo.length / 2, arrTitulo.length).join(" ");

    return (

        <section className={(conten?.direccion === "izquierda") ? "bloque-lateral row flex-row-reverse align-items-center py-5" : "bloque-lateral row align-items-center py-5"}>
            <div className="col-12 col-md-8">
                <h2 className="mb-4">{strNonColor}<span className="color-primario">{strColor}</span></h2>
                <p>{conten?.texto}</p>
                {
                    (conten?.checks !== null) ?
                        <>
                            {conten?.checks.map((elem, index) => {
                                return <CheckInformacion key={index} texto={elem} />
                            })}
                        </> : ""
                }
                <div className="text-center">
                    <Accion tipo="boton" texto={conten?.textoBoton} />
                </div>
            </div>
            <div className="col-md-4 pt-4">
                <img className="img-fluid " src={conten?.imagen} alt="Nuestra misión"></img>
            </div>
        </section>
    )
}

export default BloqueLateral;
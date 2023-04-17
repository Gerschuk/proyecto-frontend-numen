import "./mision.css";
import imagen from "../../imagenes/mision.jpg";
import CheckInformacion from "../check-informacion/CheckInformacion";
import Boton from "../boton/Boton";

function Mision() {
    return (
        <section className="mision row align-items-center py-5">
            <div className="col-12 col-md-8">
                <h2 className="mb-4">¿Quiénes Fabrican <span className="color-primario">Tus Prendas?</span></h2>
                <p><span className="bold">Nuestra misión es ayudar a crecer el ecosistema local de indumentaria en Argentina y toda Latinoamérica</span></p>
                <CheckInformacion texto="Conectamos con los productores locales" />
                <CheckInformacion texto="Porque tiene más sentido comprar algo hecho por una persona cercana que por una empresa lejana." />
                <CheckInformacion texto="Porque los productos locales hacen de nuestro rincón del mundo un lugar mejor para vivir" />
                <CheckInformacion texto="Porque fomentamos el empleo local" />
                <CheckInformacion texto="Porque tiene más sentido para el medio ambiente" />
                <div className="ps-4">
                    <Boton texto="Descubrí nuestros productos"/>
                </div>
            </div>
            <div className="col-md-4 pt-4">
                <img className="img-fluid " src={imagen} alt="Nuestra misión"></img>
            </div>
        </section>
    )
}

export default Mision;
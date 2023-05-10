import BloqueLateral from "../componentes/bloque-lateral/BloqueLateral";
import Partner from "../componentes/partner/Partner";
import Carrusel from "../componentes/carrusel/Carrusel";
import Beneficios from "../componentes/beneficios/Beneficios";
import Home from "../componentes/home/Home";

function getContent(arr, nombreComponente) {
    return arr.find(item => item.componente === nombreComponente)
}

function HomePage(contenido) {

    const homeContent = getContent(contenido?.data, "home");
    const beneficiosContent = getContent(contenido?.data, "beneficios");
    const primerBloqueContent = getContent(contenido?.data, "bloque1");
    const partnerContent = getContent(contenido?.data, "partner");
    const segundoBloqueContent = getContent(contenido?.data, "bloque2");
    const carruselContent = getContent(contenido?.data, "carrusel");

    return (
        <>
            <main className="container">

                <Home data={homeContent} />

                <Beneficios data={beneficiosContent} />


                <BloqueLateral data={primerBloqueContent} bloque="bloque1" />

                <Partner data={partnerContent} />

                <BloqueLateral data={segundoBloqueContent} bloque="bloque2" />

                <Carrusel data={carruselContent} />

            </main>
        </>
    )
}

export default HomePage;
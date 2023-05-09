import BloqueLateral from "./assets/componentes/bloque-lateral/BloqueLateral";
import Partner from "./assets/componentes/partner/Partner";
import Carrusel from "./assets/componentes/carrusel/Carrusel";
import Beneficios from "./assets/componentes/beneficios/Beneficios";
import Home from "./assets/componentes/home/Home";

function Main(contenido) {
    return (
        <>
            <main className="container">

                <Home data={contenido} />

                <Beneficios data={contenido} />

                <BloqueLateral data={contenido} bloque="bloque1" />

                <Partner data={contenido} />

                <BloqueLateral data={contenido} bloque="bloque2" />
                <Carrusel data={contenido} />

            </main></>
    )
}
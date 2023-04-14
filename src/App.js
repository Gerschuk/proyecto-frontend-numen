import Alerta from "./assets/componentes/alerta/Alerta";
import Beneficios from "./assets/componentes/beneficios/Beneficios";
import Carrusel from "./assets/componentes/carrusel/Carrusel";
import Home from "./assets/componentes/home/Home";
import Mision from "./assets/componentes/mision/Mision";
import Navbar from "./assets/componentes/navbar/Navbar";
import Partner from "./assets/componentes/partner/Partner";


const paginas = [
  {
    id: 0,
    nombre: "Inicio",
    url: "/inicio"
  },
  {
    id: 1,
    nombre: "Productos",
    url: "/productos"
  },
  {
    id: 2,
    nombre: "Contacto",
    url: "/contacto"
  }
];

function App() {
  return (
    <>
      <Alerta texto="Envío Gratis en todas tus compras superiores a 5000$" />
      <header>
        <Navbar contenido={paginas} />
      </header>
      <main className="container">
        <Home titulo="Temporada Invierno" parrafo="Encontrá las mejores prendas seleccionadas por nuestros expertos para la siguiente temporada" />
        <Beneficios />
        <Mision />
        <Partner titulo="Nuestro socio benéfico" img="https://caritas.org.ar/wp-content/uploads/2021/05/logo-caritas.svg" texto="Donamos el 5% de nuestras ganancias a nuestro socio benéfico" />
        <Carrusel/>
      </main>
    </>
  );
}

export default App;

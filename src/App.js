import Alerta from "./assets/componentes/alerta/Alerta";
import Beneficios from "./assets/componentes/beneficios/Beneficios";
import Home from "./assets/componentes/home/Home";
import Navbar from "./assets/componentes/navbar/Navbar";


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
        <Beneficios/>
      </main>
    </>
  );
}

export default App;

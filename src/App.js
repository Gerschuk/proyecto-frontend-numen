import Alerta from "./assets/componentes/alerta/Alerta";
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
      <main className="container-xl">
        <Home titulo="Temporada Otoño 2023"/>
      </main>
    </>
  );
}

export default App;

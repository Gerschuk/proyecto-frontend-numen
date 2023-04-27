import Alerta from "./assets/componentes/alerta/Alerta";
import Navbar from "./assets/componentes/navbar/Navbar";


const paginas = [
  {
    id: 0,
    texto: "Inicio",
    url: "/inicio"
  },
  {
    id: 1,
    texto: "Productos",
    url: "/productos"
  },
  {
    id: 2,
    texto: "Contacto",
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
    </>
  );
}

export default App;

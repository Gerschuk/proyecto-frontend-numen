import Alerta from "./assets/componentes/alerta/Alerta";
import Navbar from "./assets/componentes/navbar/Navbar";
import React from 'react';
import Card from "./assets/componentes/tarjetas/Card";







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
      <div>
      {<h3 className="UltOfe">Ultimas Ofertas</h3>}
      <Card
        title="Riñonera Cuero"
        image="https://d3ugyf2ht6aenh.cloudfront.net/stores/988/937/products/img_7633-prueba1-87e03894c9004c2b9916714768191725-320-0.webp"
        description="Esta es una tarjeta de ejemplo"
        precioOrigin="$3200"
        precioDesc="$2800"
      />
      <Card
        title="Gorra Negra"
        image="https://d3ugyf2ht6aenh.cloudfront.net/stores/988/937/products/img_305311-5fc893c55d82734e9216753512387524-320-0.webp"
        description="Esta es una tarjeta de ejemplo"
        precioOrigin="$5000"
        precioDesc="$4700"
      />
      <Card
        title="Ropa Interior Negra"
        image="https://d3ugyf2ht6aenh.cloudfront.net/stores/988/937/products/img_3731-311-30466bbcb580ea063316730367422774-320-0.webp"
        description="Esta es una tarjeta de ejemplo"
        precioOrigin="$3500"
        precioDesc="$3000"
      />
      <Card
        title="Dupla Neceser"
        image="https://d3ugyf2ht6aenh.cloudfront.net/stores/988/937/products/img_46661-47f5345b4eb8d0f45516472717252886-320-0.webp"
        description="Esta es una tarjeta de ejemplo"
        precioOrigin="$4000"
        precioDesc="$3500"
      />
    </div>
    </>
    
  );


}

export default App;

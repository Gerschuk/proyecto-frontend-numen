import React from 'react';
import Card from "./assets/componentes/tarjetas/Card";
import Alerta from "./assets/componentes/alerta/Alerta";
import Navbar from "./assets/componentes/navbar/Navbar";
import Home from "./assets/componentes/home/Home";
import Beneficios from "./assets/componentes/beneficios/Beneficios";
import BloqueLateral from "./assets/componentes/bloque-lateral/BloqueLateral";
import Partner from "./assets/componentes/partner/Partner";
import Carrusel from "./assets/componentes/carrusel/Carrusel";
import Carrito from "./assets/componentes/carrito/Carrito";

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


const bloqueLateral1 = {
  titulo: "¿Quiénes Fabrican Tus Prendas?",
  texto: "Nuestra misión es ayudar a crecer el ecosistema local de indumentaria en Argentina y toda Latinoamérica",
  checks: [
    "Conectamos con los productores locales.",
    "Porque tiene más sentido comprar algo hecho por una persona cercana que por una empresa lejana.",
    "Porque los productos locales hacen de nuetro rincón del mundo un lugar mejor para vivir.",
    "Porque fomentamos el empleo local.",
    "Porque tiene más sentido para el medio ambiente."],
  textoBoton: "Descubrí nuestros productos",
  imagen: "https://images.pexels.com/photos/6211446/pexels-photo-6211446.jpeg",
}

const bloqueLateral2 = {
  direccion: "izquierda",
  titulo: "Sorprende a alguien Trabajando desde casa",
  texto: `¿Tienes un colega o familiar que trabaja duro en casa? Nuestra caja   de prendas "Trabajar desde casa" es la forma perfecta de hacerlos sonreír, con entrega directa en su domicilio.
        Si quieres comprar para un grupo grande de personas, ponte en contacto con nosotros y hablaremos de paquetes a medida y mensajes personalizados.`,
  checks: null,
  textoBoton: "Comprar Ahora",
  imagen: "https://images.pexels.com/photos/6124349/pexels-photo-6124349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

function App() {
  return (
    <>
      <Alerta texto="Envío Gratis en todas tus compras superiores a 5000$" />
      <header>
        <Navbar contenido={paginas} />
        <Carrito/>
      </header>

  <main className="container">

        <Home titulo="Temporada Invierno" parrafo="Encontrá las mejores prendas seleccionadas por nuestros expertos para la siguiente temporada" />
       
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
    <Beneficios />
    <BloqueLateral props={bloqueLateral1} />

    <Partner titulo="Nuestro socio benéfico" img="https://caritas.org.ar/wp-content/uploads/2021/05/logo-caritas.svg" texto="Donamos el 5% de nuestras ganancias a nuestro socio benéfico" />

    <BloqueLateral props={bloqueLateral2} />
    <Carrusel />
  </main>
    </>
  );
}

export default App;

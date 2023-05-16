// Componentes
import Alerta from "./assets/componentes/alerta/Alerta";
import Navbar from "./assets/componentes/navbar/Navbar";
import Carrito from "./assets/componentes/carrito/Carrito";
import Home from "./assets/componentes/home/Home";
import Cards from "./assets/componentes/tarjetas/Cards";
import Beneficios from "./assets/componentes/beneficios/Beneficios";
import BloqueLateral from "./assets/componentes/bloque-lateral/BloqueLateral";
import Partner from "./assets/componentes/partner/Partner";
import Carrusel from "./assets/componentes/carrusel/Carrusel";
import Footer from "./assets/componentes/footer/Footer";

// Liberarías
import React, { useEffect, useState } from 'react';
import axios from "axios";

// Endpoints
import { ConexionesApi } from "./assets/Diccionario";


function App() {

  // Obtiene el contenido estático de la página
  const [contenido, setContenido] = useState([]);

  useEffect(() => {
    axios.get(ConexionesApi.contenido)
      .then(res => {
        setContenido(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  console.log(contenido)
  // Obtiene las rutas de la página, por ejemplo los links del navbar
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    axios.get(ConexionesApi.rutas)
      .then(res => {
        setRutas(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <Alerta data={contenido} />
      <header>
        <Navbar contenido={rutas} />
        <Carrito />
      </header>
      
      <main className="container">

        <Home data={contenido} />

        <Cards />
        
        <Beneficios data={contenido} />
       
        <BloqueLateral data={contenido} bloque="bloque1"/>

        <Partner data={contenido} />
        
        <BloqueLateral data={contenido} bloque="bloque2" />
        <Carrusel data={contenido} />
        
      </main>
      
      <Footer/>
      </>
      );
}

      export default App;

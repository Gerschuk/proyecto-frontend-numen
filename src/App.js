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
import Modal from "./assets/componentes/modal/Modal";
import Card from "./assets/componentes/tarjetas/Card";

// Liberarías
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";

// Endpoints
import { ConexionesApi } from "./assets/Diccionario";

const DataContext = createContext();

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

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get(ConexionesApi.productos)
      .then(res => {
        setProductos(res.data);
      })
      .catch(err => {
        console.log(err);
    })
  },[])

  return (
    <>
      <Alerta data={contenido} />
      <header>
        <Navbar contenido={rutas} />
        <Carrito />
      </header>
      
      <main className="container">

        <Home data={contenido} />

        <Cards data={productos} />
        
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

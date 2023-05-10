// Componentes
import Template from "./assets/pages/Template";
import HomePage from "./assets/pages/HomePage";

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

  return (
    <>
      <Template data={contenido}>
        <HomePage data={contenido} />
      </Template>
      </>
      );
}

      export default App;

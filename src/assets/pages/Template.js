import Alerta from "../componentes/alerta/Alerta";
import Navbar from "../componentes/navbar/Navbar";
import Carrito from "../componentes/carrito/Carrito";
import Footer from "../componentes/footer/Footer";
import { ConexionesApi } from "../Diccionario";
import axios from "axios";
import { useState, useEffect } from "react";

function Template({contenido, children }) {

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
            <header>
                <Alerta data={contenido} />
                <Navbar contenido={rutas} />
                <Carrito />
            </header>
            <main className="container">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Template;
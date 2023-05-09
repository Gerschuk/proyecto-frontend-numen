import { Routes, Route } from "react-router-dom";

// Paginas
import Home from "./assets/pages/HomePage";
import Productos from "./assets/pages/Productos";
import Contacto from "./assets/pages/Contacto";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={Home} />
            <Route path="/productos" element={Productos} />
            <Route path="/contacto" element={Contacto} />
        </Routes>
    )
}

export default AppRoutes;
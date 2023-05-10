import { Routes, Route } from "react-router-dom";

// Paginas
import Template from "./assets/pages/Template";
import HomePage from "./assets/pages/HomePage";
import Productos from "./assets/pages/Productos";
import Contacto from "./assets/pages/Contacto";
import NotFound from "./assets/pages/NotFound";

function AppRoutes() {
    return (
            <Routes>
                <Route exact path="/" element={<Template />}>
                    <Route index element={<HomePage />} />
                    <Route path="productos" element={<Productos />} />
                    <Route path="contacto" element={<Contacto />} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
    )
}

export default AppRoutes;
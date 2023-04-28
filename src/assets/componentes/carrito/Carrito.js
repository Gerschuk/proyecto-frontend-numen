import ListaProductos from "./ListaProductos";
import "./carrito.css";

function Carrito() {
    return (
        <div className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvas" aria-labelledby="offcanvasLabel"
            data-bs-scroll="true">
            <div className="offcanvas-header">
                <h3 className="offcanvas-title" id="offcanvasLabel">Mi carrito</h3>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                    <ListaProductos/>
                </div>

            </div>
        </div>
    )
}

export default Carrito;
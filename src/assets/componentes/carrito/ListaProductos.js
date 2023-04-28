import Accion from "../accion/Accion";

// TODO
// Cuando se pasen las props modificar
// key por el id
// Nombre Producto por nombre
// 180 por precio
// Numero del badge por cant

function ListaProductos({ id, nombre, precio, cant }) {
    return (
        <ul className="list-group">
            <li key="1" className="list-group-item d-flex justify-content-between align-items-start">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffabric.com.ar%2Fwp-content%2Fuploads%2F2017%2F11%2FREMERALISA.NEGRA_.jpg&f=1&nofb=1&ipt=2f8c7781dbbc07ef37e58d3d92ba59d00ecae448722c96911014e86b38e79f08&ipo=images" alt="remera" className="carrito--thumbnail" />
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Remera John</div>
                    <div className="carrito--precio">$180</div>
                </div>
                <div className="row w-20 pt-2 justify-content-center">
                    <span className="badge bg-secondary rounded-pill">14</span>
                    <div className="d-flex justify-content-between mt-3">
                        <Accion tipo="boton" icono="+" />
                        <Accion tipo="boton" icono="-" />
                        <Accion tipo="boton" icono="borrar" />
                    </div>
                </div>
                
                
            </li>
            <li key="2"className="list-group-item d-flex justify-content-between align-items-start">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lIqemwGonn0CMwCT2zk4hAHaIw%26pid%3DApi&f=1&ipt=e85df6fa3d084111eccafc2703f69cbae1615e01e33e56a05766109cd82d7835&ipo=images" alt="remera" className="carrito--thumbnail" />
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Remera John</div>
                    <div className="carrito--precio">$180</div>
                </div>
                <div className="row w-20 pt-2 justify-content-center">
                    <span className="badge bg-secondary rounded-pill">14</span>
                    <div className="d-flex justify-content-between mt-3">
                        <Accion tipo="boton" icono="+" />
                        <Accion tipo="boton" icono="-" />
                        <Accion tipo="boton" icono="borrar" />
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default ListaProductos;
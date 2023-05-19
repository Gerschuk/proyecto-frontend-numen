import React from 'react';
import './Card.css';

function calculaDescuento(precio, descuento) {
  return (descuento) ? Math.round((precio / (1 + descuento))) : precio;
}
function Card({ data }) {

  return (
    <div className="card d-flex  col-md-10 mb-3">
      <img className="img-fluid" src={data.img} alt={data.nombre} />
      <div className='card-body d-flex align-items-center flex-column'></div>

      <h4 className='card-title'>{data.nombre}</h4>
      <p className='card-text text-secondary'></p>
      <div className="precio">
        <span className="precio-descuento">{calculaDescuento(data.precio, data.descuento)}</span>
        {(data.descuento !== null) && <span className="precio-original">{data.precio}</span>}
      </div>
      <button type="button" className="btn btn-primary" data-bs-toggle={`ModalProducto${data.id}`} data-bs-target="#exampleModal">
        Comprar ahora
      </button>
    </div>
  )
}




export default Card;
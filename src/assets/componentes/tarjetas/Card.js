import React from 'react';
import './Card.css';

const Card = ({ title, image, description,precioOrigin,precioDesc }) => {
    return (
    
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        {/* <div class="precio">{precio}</div> */}
        <div class="precio">
        <span class="precio-descuento">{precioDesc}</span> 
    <span class="precio-original">{precioOrigin}</span> 
    </div>
     
  <div class="card">
  <div class="contenedor-botones">
  <button class="boton-compra">Compra Rápida</button>

</div>
</div>
      </div>
    );
  };

export default Card;
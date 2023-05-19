import React from 'react'
import Card from "./Card";
import "./Card.css";
import "../modal/Modal";
import Modal from '../modal/Modal';

// Muestra los productos con descuento
function Cards(productos) {
  // Filtra los productos que tienen descuento
  const productoConDescuentos = productos.data.filter((producto) => producto.descuento !== null);

  return (
    <section className=" row py-5 mt-5 text-center ">
      <h2 className="titulo">Ultimas <span className="color-primario">Ofertas</span></h2>
    <div className='d-flex flex-wrap justify-content-center h-100 aling-item-center '>  
     {
    
      productoConDescuentos.map((producto, index) =>(
        <div className=' col-md-3' key={index}>
          <Card data={producto} />
          </div>
      ))
     }
        </div>

       </section>
  
   
  )
}

export default Cards 

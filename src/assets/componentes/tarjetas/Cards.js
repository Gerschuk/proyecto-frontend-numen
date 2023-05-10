import React from 'react'
import Card from "./Card";
import "./Card.css";

const cards = [
  {
    id:1,
    title:"Riñonera Cuero",
    image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/988/937/products/img_7633-prueba1-87e03894c9004c2b9916714768191725-320-0.webp",
    precioO:"$3200",
    precioD:"$2800",
  },
  {
    id:2,
    title:"Gorra Negra",
    image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/988/937/products/img_305311-5fc893c55d82734e9216753512387524-320-0.webp",
    precioO:"$5000",
    precioD:"$4500",
  },
  {
    id:3,
    title:"Ropa Interior Negra",
    image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/988/937/products/img_3731-311-30466bbcb580ea063316730367422774-320-0.webp",
    precioO:"$3500",
    precioD:"$3200",
  },
  {
    id:4,
  title:"Dupla Neceser",
  image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/988/937/products/img_46661-47f5345b4eb8d0f45516472717252886-320-0.webp",
  precioO:"$4000",
  precioD:"$3500",
  }

]

function Cards() {
  return (
    <section className="py-5 mt-5 text-center">
      <h2 className="titulo">Ultimas <span className="color-primario">Ofertas</span></h2>
    <div className='container1 d-flex flex-wrap justify-content-center h-100 aling-item-center '>  
       <div className='row col-20'>  
     {
      cards.map((card, index) =>(
        <div className=' col-md-3' key={index}>
          <Card title={card.title} imgSource={card.image} precioD={card.precioD}precioO={card.precioO}  />
          </div>
      ))
     }
        </div>
    
       </div>
       </section>
  
   
  )
}

export default Cards 

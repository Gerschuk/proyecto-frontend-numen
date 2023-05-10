import "./carrusel.css";

function Carrusel(contenido) {

    const cont = contenido?.data?.find(item => item.componente === "carrusel")?.imagenes;

    return (
        <section className="row py-4 justify-content-center">
            <h2 className="text-center pt-4"><span className="color-primario">@FashionPremium </span>en Instagram</h2>

            <div id="carousel" className="carousel slide pt-3 ">
                <div className="carousel-inner">
                    {
                        cont?.map((elemento, index) => {
                            return (
                                <div key={index} className={(index === 0) ? "carousel-item active" : "carousel-item"}>
                                    <img src={elemento} className="d-block img-fluid" alt="..." />
                                </div>
                            )
                        })
                    } 
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">

                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default Carrusel;
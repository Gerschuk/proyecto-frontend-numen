import "./home.css";

function Home(contenido) {
    return (
        <div className="home">
            <div className="contenido d-flex flex-column">
                <h1>{contenido.titulo}</h1>
            </div>
        </div>
    )
}

export default Home;
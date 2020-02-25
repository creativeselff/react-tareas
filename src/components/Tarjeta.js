export function Tarjeta(props) {

    const autor = {
        nombre: "Federico Hammond",
        titulo: "React Dev",
        imagen: "https://www.dictionary.com/e/wp-content/uploads/2018/03/thisisfine-1.jpg"
    }

    return (
        <div className="tarjeta" >
            <img
                src={autor.imagen}
                alt="Foto de perfil"
                className="tarjeta-img"
            />
            <div className="tarjeta-data">
                <header className="tarjeta-data-header">{autor.nombre}</header>
                <span>{autor.titulo}</span>
            </div>
        </div >
    )
}
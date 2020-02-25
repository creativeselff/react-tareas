import { Tarjeta } from './Tarjeta.js';

export function BlogPost(props) {
    return (
        <div>
            <article className="post">
                <header className="post-header">
                    <h2 className="post-title">{props.title}</h2>
                    <Tarjeta {...props.autor} />
                </header>
                <p className="post-paragraph">
                    {props.parrafos.map(parrafo => (
                        <li key={parrafo.cuerpo} className="post-paragraph">
                            <br />
                            {parrafo.cuerpo}
                            <br />
                        </li>
                    ))}
                </p>
            </article>
        </div>
    );
}
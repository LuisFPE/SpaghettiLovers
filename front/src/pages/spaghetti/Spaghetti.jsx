import "./Spaghetti.css";
import { useLoaderData } from "react-router-dom";

const Spaghetti = ()=>{
    const spaghetti = useLoaderData();
    
    return (
        <article className="spaghetti-card">
            <h2>{spaghetti.name}</h2>
            <p>Autor : {spaghetti.owner.username}</p>
            <p>Tipo de Salsa : {spaghetti.sauce}</p>
            <p>Descripcion : {spaghetti.description}</p>
            <p>Receta : {spaghetti.recipe}</p>
            <p>Numero de Ingredientes : {spaghetti.ingredients.length}</p>
            <ul>
                {spaghetti.ingredients.map(ingredient => (
                    <li key={ingredient._id}>{ingredient.name}</li>
                ))}
            </ul>
        </article>
    )
}

export default Spaghetti;
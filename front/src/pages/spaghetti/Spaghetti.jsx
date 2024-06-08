import "./Spaghetti.scss";
import Banner2 from "../../assets/img/banner2.jpeg";
import { useLoaderData } from "react-router-dom";
import { addIngredientToSpaghetti } from "../../utils/fetch";

const Spaghetti = ()=>{
    const spaghetti = useLoaderData();
    console.log("spaghetti: ", spaghetti)

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const spaghetti_id = spaghetti._id;        
        const ingredientId = e.target.addingredients.value;
        const result = await addIngredientToSpaghetti(spaghetti_id,ingredientId);
   
    }

    return (
        <article>
            <img src={Banner2} alt="" id="banner2"/>
            <section className="spaghetti-card">
                    <h2>{spaghetti.name}</h2>
                    <div id="spaghetti-info">
                        <p> <span>Autor:</span> {spaghetti.owner.username}</p>
                        <p> <span>Tipo de Salsa:</span> {spaghetti.sauce}</p>
                        <p> <span>Descripcion:</span> {spaghetti.description}</p>
                        <p> <span>Receta:</span> {spaghetti.recipe}</p>
                        <p> <span>Numero de Ingredientes:</span> {spaghetti.ingredients.length}</p>
                        <form action="" onSubmit={handleSubmit}>
                            <label htmlFor="addingredients">Agregar Ingredientes:</label>
                            <select name="addingredients" id="addingredinte">
                            {spaghetti.addingredients.map(ingredient =>(
                                <option value={ingredient._id} key={ingredient._id}>{ingredient.title}</option>
                            ))}    
                            </select> 
                            <button type="submit" id="btn-add-ingredient">Agregar</button>  
                        </form>
                        <p>Ingredientes</p>
                        <>
                            {spaghetti.ingredients.map(ingredient => (
                                <li key={ingredient._id}>{ingredient.title}</li>
                            ))}
                        </>                          
                    </div>
            </section>
        </article>
    )
}

export default Spaghetti;
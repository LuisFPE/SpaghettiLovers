import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateIngredient from "../../components/ingredient/CreateIngredient";

const Ingredient = ()=>{
    const [ingredients,setIngredients] = useState(useLoaderData());
    const [creatingIngredient,setCreatingIngredient] = useState(false);
    const ingredientsHtml = ingredients.map(ingredient => {
        return (
            <article className="ingredients-list-element" key={ingredient._id}>
                <h3>{ingredient.title}</h3>
                <p>{ingredient.description}</p>
            </article>
        )
    })
    return (
        <>
        {creatingIngredient ?
            <Modal onClose={()=>setCreatingIngredient(false)}>
                <CreateIngredient onCreateIngredient={()=>setCreatingIngredient(false)}/>
            </Modal>
            :
            <button onClick={()=>setCreatingIngredient(true)}>Nuevo Ingrediente</button>
        }
            <section className="ingredient-list">
                {ingredientsHtml}
            </section>
        </>
    )
}

export default Ingredient;
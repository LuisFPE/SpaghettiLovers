import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateIngredient from "../../components/ingredient/CreateIngredient";
import "./Ingredient.scss"

const Ingredient = ()=>{
    const [ingredients,setIngredients] = useState(useLoaderData());
    const [creatingIngredient,setCreatingIngredient] = useState(false);
    const ingredientsHtml = ingredients.map(ingredient => {
        return (
            <article className="ingredients-list-element" key={ingredient._id}>
                <h3>{ingredient.title}</h3>
                <p className="ingredient-description">{ingredient.description}</p>
            </article>
        )
    })
    return (
        <>
        <section id="IngredientsList">
            {creatingIngredient ?
                <Modal onClose={()=>setCreatingIngredient(false)} >
                    <CreateIngredient onCreateIngredient={()=>setCreatingIngredient(false)}/>
                </Modal>
                :
                <button id="btn-create2" onClick={()=>setCreatingIngredient(true)} >Nuevo Ingrediente</button>
            }
                <section className="ingredient-list">
                    {ingredientsHtml}
                </section>            
        </section>

        </>
    )
}

export default Ingredient;
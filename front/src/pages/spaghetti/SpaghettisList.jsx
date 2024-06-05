import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateSpaghetti from "../../components/spaghetti/CreateSpaghetti";

const SpaghettisList = () => {
    const [spaghettis,setSpaghettis] = useState(useLoaderData());
    const [creatingSpaghetti,setCreatingSpaghetti] = useState(false);
    const spaghettisHtml = spaghettis.map(spaghetti => {
        return (
            <article className="spaghettis-list-element" key={spaghetti._id}>
                <h2>{spaghetti.name}</h2>       
                <p>Autor : {spaghetti.owner.username}</p>
                <p>Ingredientes : {spaghetti.ingredients.length}</p>
                <Link to={`/spaghettis/${spaghetti._id}`}>Ver</Link>
            </article>
        )
    })
    return (
        <>
        {creatingSpaghetti ?
            <Modal onClose={()=>setCreatingSpaghetti(false)}>
                <CreateSpaghetti onCreate={()=>setCreatingSpaghetti(false)}/>
            </Modal>
            :
            <button onClick={()=>setCreatingSpaghetti(true)}>Nuevo Spaghetti</button>
        }
            <section className="spaghetti-list">
                {spaghettisHtml}
            </section>
        </>
    )
}

export default SpaghettisList
import { createIngredient } from "../../utils/fetch";
import "./CreateIngredient.scss"
const CreateSpaghetti = ({onCreateIngredient})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const title = e.target.title.value;        
        const description = e.target.description.value;
        const data = {title,description};
        console.log("data",data)
        const result = await createIngredient(data);
        onCreateIngredient();
        window.location.reload()
    }
    return (
        <form action="" className="create-ingredient" onSubmit={handleSubmit}>
            <label htmlFor="title" >Nombre</label>
            <input type="text" name="title"/>
            <label htmlFor="description" >Descripcion</label>
            <textarea name="description"></textarea>
            <button type="submit" id="btn-create-ing">Crear</button>
        </form>
    )
}
export default CreateSpaghetti;
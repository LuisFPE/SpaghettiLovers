import { createSpaghetti } from "../../utils/fetch";
import "./CreateSpaghetti.scss"
const CreateSpaghetti = ({onCreate})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;        
        const sauce = e.target.sauce.value;
        const description = e.target.description.value;
        const recipe = e.target.recipe.value;
        const data = {name,sauce,description,recipe};
        console.log("name",data)
        const result = await createSpaghetti(data);
        console.log("result",result)
        onCreate();
        window.location.reload()
    }
    return (
        <form action="" className="create-spaghetti" onSubmit={handleSubmit}>
            <label htmlFor="name" >Name</label>
            <input type="text" name="name"/>
            <label htmlFor="sauce" >Salsa</label>
            <select name="sauce" id="sauce">
                <option value="Red">Roja</option>
                <option value="White">Blanca</option>
                <option value="Green">Verde</option>
            </select>    
            <label htmlFor="description" >Description</label>
            <textarea name="description"></textarea>
            <label htmlFor="recipe" >Recipe</label>
            <textarea name="recipe"></textarea>
            <button type="submit" className="btn-create-sp">Crear</button>
        </form>
    )
}
export default CreateSpaghetti;
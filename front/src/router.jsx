import {createBrowserRouter,redirect} from "react-router-dom";
import { getSpaghettis,getSpaghetti,getIngredients } from "./utils/fetch";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/register/Register";
import SpaghettisList from "./pages/spaghetti/SpaghettisList";
import Spaghetti from "./pages/spaghetti/Spaghetti";
import Ingredient from "./pages/spaghetti/Ingredient";

async function fetchSpaghettis(){
    const result = await getSpaghettis();
    if(result.error){
        return redirect("/register");
    }
    return result.data;
}
async function fetchSpaghetti(id){
    const result = await getSpaghetti(id);
    if(result.error){
        return redirect("/register");
    }
    return result.data;
}
async function fetchIngredients(){
    const result = await getIngredients();
    if(result.error){
        return redirect("/register");
    }
    return result.data;
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <h2>Welcome to SpaghettiLovers</h2>
        },
        {
            path: "/spaghettis",
            element: <SpaghettisList />,
            loader: () => fetchSpaghettis()
        },
        {
            path: "/ingredients",
            element: <Ingredient/>,
            loader: () => fetchIngredients()
        },
        {
            path: "/spaghettis/:id",
            element: <Spaghetti />,
            loader: ({params}) => fetchSpaghetti(params.id)
        },
      ]
    },
    {
        path: "/register",
        element: <Register />
    }
    
  ]);

export default router;
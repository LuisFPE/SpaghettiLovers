import { getToken } from "./local";

const API_URL = "https://spaghettiapi.luispadua.com/api";

const fetchData = async(route,method,inputData=null)=>{    
    const url = new URL(API_URL + route);
    const fetchOptions = {
        method:method,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    if(inputData){
        if(method === "get"){
            Object.keys(inputData).forEach(key=>{
                url.searchParams.append(key,inputData[key]);
            })
        }
        else if(method === "post" || method === "put" || method === "patch"){
            fetchOptions.body = JSON.stringify(inputData);
        }
    }
    try {
        const result = await fetch(url.toString(),fetchOptions);
        const data  = await result.json();

        return data;
    } catch (error) {
        console.error(error);
        return ({error:error.message})
    }
}

const register = async(userData)=>{
    const result = await fetchData("/register","post",userData);
    return result;
}
const login = async(userData)=>{
    const result = await fetchData("/login","post",userData);
    return result;
}
const getUserData = async()=>{
    const result = await fetchData("/spaghettis/bytoken","get");
    return result;
}
const getSpaghettis = async()=>{
    const result = await fetchData("/spaghettis","get");
    return result;
}
const getSpaghetti= async(id)=>{
    const result = await fetchData("/spaghettis/"+id,"get");
    return result;
}
const createSpaghetti = async(spaghettiData)=>{
    const result = await fetchData("/spaghettis","post",spaghettiData);
    return result;
}
const getIngredients = async()=>{
    const result = await fetchData("/ingredients","get");
    
    return result;        
}
const createIngredient = async(ingredientData)=>{
    const result = await fetchData("/ingredients","post",ingredientData);
    console.log("resultado ",result);
    return result;
}
const addIngredientToSpaghetti= async(idSpaghetti, idIngredient)=>{
    const result = await fetchData("/spaghettis/"+idSpaghetti+"/ingredient","post",{ingredientId:idIngredient});
    return result;
}

export {
    register,
    login,
    getSpaghettis,
    getSpaghetti,
    createSpaghetti,
    getUserData,
    getIngredients,
    createIngredient,
    addIngredientToSpaghetti
}
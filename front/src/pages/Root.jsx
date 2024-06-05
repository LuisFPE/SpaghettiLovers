import "../App.css";
import { Outlet, Link,useNavigate } from "react-router-dom";
import { getToken } from "../utils/local";
import { useEffect,useContext } from "react";
import UserContext from "../context/userContext";
import { getUserData } from "../utils/fetch";
const Root = () => {
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!getToken()) {
            navigate("/register");
        }
        fetchUserData();
    }, []);

    async function fetchUserData() {
        const data  = await getUserData();
        if(data.error){
            navigate("/register");
        }
        setUser(data.data);
      }
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/spaghettis">Spaghettis</Link>
                    </li>
                    <li>
                        <Link to="/ingredients">Ingredientes </Link>
                    </li>                    
                    <li>
                        <Link to="/register">Login / Registro </Link>
                    </li>
                </ul>
            </nav>
            <h1>Hola {user?.username}</h1>
            <Outlet />
        </div>
    )
};

export default Root;
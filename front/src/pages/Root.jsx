import "./Root.scss"
import { Outlet, Link,useNavigate } from "react-router-dom";
import { getToken } from "../utils/local";
import { useEffect,useContext } from "react";
import UserContext from "../context/userContext";
import { getUserData } from "../utils/fetch";

const Root = () => {
    const { user, setUser } = useContext(UserContext);
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
        <div id="root-body">
            <nav>  
                <div>
                    <Link to="/">Inicio</Link>
                </div>
                <div>
                    <Link to="/spaghettis">Spaghettis</Link>                    
                </div>
                <div>
                    <Link to="/ingredients">Ingredientes </Link>                    
                </div>
                <div>
                    <Link to="/register">Login </Link>                    
                </div>
            </nav>
            <Outlet />
        </div>
        
    )
};

export default Root;
import { useEffect, useState,useContext } from "react";
import { register, login } from "../../utils/fetch"
import { saveToken } from "../../utils/local";
import { useNavigate } from "react-router-dom";

import UserContext from "../../context/userContext";

import "./Register.scss";

import icon1 from "../../assets/img/spaghetti-icon-1.png"
import icon2 from "../../assets/img/spaghetti-icon-2.png"
import icon3 from "../../assets/img/spaghetti-icon-3.png"
import icon4 from "../../assets/img/spaghetti-icon-4.png"

const initialUserData = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: ""
}
const Register = ({ onLogin }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(initialUserData);
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    const handleUserData =(e) =>{
        e.preventDefault();
        const data = e.target.value;
        const key = e.target.name;
        setUserData(userData => {
            // const newUserData = {...userData};
            // newUserData[key] = data;
            // return newUserData;
            return {
                ...userData,
                [key]:data
            }
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let result;
        if (isRegister) {
            result = await register(userData);
            if (!result.error) {
                setIsRegister(false);
                setError("user registered correctly");
            }
            else {
                setError(result.error);
            }
        }
        else {
            result = await login(userData);
            if (!result.error) {
                setError("login correct");
                saveToken(result.token);
                //onLogin(result.token);
                navigate("/");
            }
            else {
                setError(result.error);
            }
        }
    }
    return (
            <section className="register-login">
                <img src={icon1} alt="icono pasta 1" className="spaghetti-icon" id="spaghetti-icon-1" />
                <img src={icon2} alt="icono pasta 2" className="spaghetti-icon" id="spaghetti-icon-2" />
                <img src={icon3} alt="icono pasta 3" className="spaghetti-icon" id="spaghetti-icon-3" />
                <img src={icon4} alt="icono pasta 4" className="spaghetti-icon" id="spaghetti-icon-4" />
                <h2 id="Welcome">Bienvenid@ a Spaghetti Lovers</h2>
                <h2>{isRegister ? "Cree una cuenta facil y rapido" : "Entre usando su cuenta"}</h2>
                {error}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Nombre de Usuario</label>
                    <input name="username" type="text" value={userData.username} onChange={handleUserData} />
                    {isRegister &&
                        <>
                        <label htmlFor="email">Correo Electronico</label>
                        <input name="email" type="email" value={userData.email} onChange={handleUserData} />
                        </>
                    }
                    <label htmlFor="password">Contraseña</label>
                    <input name="password" type="password" value={userData.password} onChange={handleUserData} />
                    {isRegister &&
                        <>
                            <label htmlFor="passwordRepeat">Confirmar Contraseña</label>
                            <input name="passwordRepeat" type="password" value={userData.passwordRepeat} onChange={handleUserData} />
                        </>
                    }
                    <button id="btn-enter">{isRegister ? "Registrarse" : "Loguearse"}</button>
                </form>
                <button id="btn-change" onClick={() => setIsRegister(register => !register)} >{isRegister ? "Ya tengo una cuenta" : "Crear una Cuenta"}</button>
            </section>           
    )
}

export default Register;
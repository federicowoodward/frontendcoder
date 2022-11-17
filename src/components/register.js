import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import Loader from "./loader.js";

export default function Register() {
    const [registerStatus, setRegisterStatus] = useState(false);
    const [user, setUser] = useState([]);
    const [error, setError] = useState({});
    const [loader, setLoader] = useState(false)

    const newUser = (e) => {
        e.preventDefault()
        
        setErrorFunction({"status": "good"})
        if (user.password2 === undefined) {
            setErrorFunction({"status": "error", "error": "faltan datos"})
        } else {
            if (user.password2 === user.password) {
                setLoader(true)
                setTimeout(() => {
                    setLoader(false)
                }, 2000);
                axios.post("http://localhost:8080/users/register", {
                    name: user.name,
                    password: user.password
                })
                .then(function (response) {
                    if (response.data.status === "created"){
                        setRegisterStatus(true)
                    } 
                })
            } else {
                setErrorFunction({"status": "error", "error": "las contraseñas no coinciden"})
                return;
            }

        }
    }

    const setErrorFunction = (error) => {
        setError(error)
    }

    const defineUser = (e) => {
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    if(loader) {
        return (
            <Loader />
        );
    }
    if (!registerStatus) {
        return (
            <div>
                <form >
                    <input
                        onChange={(e) => { defineUser(e) }}
                        type="text"
                        name="name"
                        placeholder="nombre"
                    />
                    <input
                        onChange={(e) => { defineUser(e) }}
                        type="password"
                        name="password"
                        placeholder="contraseña"
                    />
                    <input
                        onChange={(e) => { defineUser(e) }}
                        type="password"
                        name="password2"
                        placeholder="repita contraseña"
                    />
                    <button
                        onClick={(e) => newUser(e)}>Entrar</button>
                </form>
                {
                    error.status === "error" &&
                    <div>
                        <p>{error.error}</p>
                    </div>
                }
                <Link to="/home" >
                    <button>Volver</button>
                </Link>
            </div>
        );
    } else if (registerStatus) {
        return (
            <div>
                <h2>Cuenta creada {user.name}! Loegate aqui abajo</h2>
                <Link to="/login" >
                    <button>Login</button>
                </Link>
            </div>
        );
    }
}
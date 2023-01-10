import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import Loader from "./loaders/loader.js";
import { UseCartContext } from "../context/productsContext.js";

export default function Login() {
    const [loginStatus, setLoginStatus] = useState(false);
    const [user, setUser] = useState([]);
    const [error, setError] = useState({});
    const [loader, setLoader] = useState(false)
    const { cookiesManager } = UseCartContext()

    useEffect(() => {
        checkCookies()
    }, [])
    
    const checkCookies = async () => {
        const data = await cookiesManager("check")
        console.log(data)
        if (data === "empty") {
            setLoginStatus(false)
        } else {
            setUser({ user: data.data.user, rol: data.data.rol })
            setLoginStatus(true)
        }
    }
    
    const defineUser = (e) => {
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const loginUser = async () => {
        setErrorFunction({"status": "good"})
        if (user.password === undefined || user.name === undefined) {
            setErrorFunction({ "status": "error", "error": "faltan datos"})
        } else {
            setLoader(true)
            axios.post("http://localhost:8080/users/login", {
                name: user.name,
                password: user.password
            })
            .then(async function  (response) {
                if (response.data.status === "correct") {
                    const data = await cookiesManager("create", user)
                    if (data.message === "saves") {
                        console.log(data.rol)
                        setLoginStatus(true)
                    }
                } else if (response.data.status === "error") {
                    setErrorFunction(response.data)
                }
            })
            .finally(() => {setLoader(false)})
        }
    }
    
    const setErrorFunction = (error) => {
        setError(error)
    }
    
    if(loader) {
        return (
            <Loader />
            );
        }
        
        else if (!loginStatus) {
            return (
                <div>
                <form >
                    <input
                        onChange={(e) => { defineUser(e) }}
                        id= "name"
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
                    <button
                        onClick={() => loginUser()}>Entrar</button>
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
    }
    if (loginStatus) {
        return (
            <Link to={`/menu/${user.name}`}>
                <button>Menu</button>
            </Link>
        );
    }
}
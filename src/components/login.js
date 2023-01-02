import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import Loader from "./loader.js";
import Menu from "./menu.js";

export default function Login() {
    const [loginStatus, setLoginStatus] = useState(false);
    const [user, setUser] = useState([]);
    const [despedida, setDespedida] = useState(false);
    const [error, setError] = useState({});
    const [loader, setLoader] = useState(false)
    
    useEffect(() => {
        searchStatus()
    })

    const searchStatus = async () => {
        const data = await cookiesManager("check")
        console.log(data)
        if (data.data.user !== undefined) {
            setUser(data.data.user)
            setLoginStatus(true)
        } else {
            setLoginStatus(false)
        }
    }


    async function cookiesManager (identifier) {
        switch (identifier) {

            case "create": 
                try {
                    const { data } = await axios.post(
                        "http://localhost:8080/users/cookies",
                        {
                            name: user.name,
                        },
                        { 
                            withCredentials: true 
                        }
                    )
                    return data
                } catch (err) {
                    console.log(err)
                }
            break;

            case "update": 

            break;

            case "check": 
                try {
                    const { data } = await axios.get("http://localhost:8080/users/getcookies");
                    return data
                } catch (err) {
                    console.log(+ err)
                }
            break;

            case "delete": 
                axios.delete("http://localhost:8080/users/deletecookies")
            break;
            
            default:   
                console.log("falta identificador")
                return;
        }
    }

    const defineUser = (e) => {
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const loginUser = async (e) => {
        e.preventDefault()
        setErrorFunction({"status": "good"})
        if (user.password === undefined || user.name === undefined) {
            setErrorFunction({ "status": "error", "error": "faltan datos"})
        } else {
            setLoader(true)
            setTimeout(() => {
                setLoader(false)
            }, 1000);
            axios.post("http://localhost:8080/users/login", {
                name: user.name,
                password: user.password
            })
            .then(async function  (response) {
                if (response.data.status === "correct") {
                    const data = await cookiesManager("create")
                    if (data.message === "saves") {
                    } else {
                        alert("no hemos podido recordarte, tendras que reloguearte")
                    }
                    setLoginStatus(true)
                } else if (response.data.status === "error") {
                    setErrorFunction(response.data)
                }
            })
        }
    }

    const setErrorFunction = (error) => {
        setError(error)
    }

    const unlogin = async (e) => {
        e.preventDefault()
        try {
            cookiesManager("delete")
            setLoginStatus(false)
            setDespedida(true)
        } catch (err) {
            console.log(err)
        }

        setTimeout(() => {
            setDespedida(false)
            setUser([])
        }, 2000)
    }

    if(loader) {
        return (
            <Loader />
        );
    }
    else if (despedida) {
        return (
            <div>
                <h2 style={{"color" : "black"}}>Hasta luego {user.name}, vuelve pronto!</h2>
            </div>
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
                        onClick={(e) => loginUser(e)}>Entrar</button>
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
    } else if (loginStatus) {
        return (
            <>
            <div>
                <h2>Bienvenido {user.name}</h2>
                <button onClick={(e) => unlogin(e)}>Desloguearse</button>
            </div>
                <Menu />
            </>
        );
    }
}
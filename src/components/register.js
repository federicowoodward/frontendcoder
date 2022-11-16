import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
// import userEvent from "@testing-library/user-event";

export default function Register() {
    const [registerStatus, setRegisterStatus] = useState(false);
    const [user, setUser] = useState([]);

    const newUser = (e) => {
        e.preventDefault()
        if (user.password2 === undefined) {
            alert("Ingrese dato")
        } else {
            if (user.password2 === user.password) {
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
                alert("las contraseñas no coinciden")
                return;
            }

        }
    }

    const cookies = (e) => {
        e.preventDefault()

        fetch("http://localhost:8080/cookies")
            .then(function (response) {
                console.log(response)
            })
    }

    const unlogin = (e) => {
        e.preventDefault()
        setUser([])
        setRegisterStatus(false)
    }

    const defineUser = (e) => {
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
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
                    <button
                        onClick={(e) => cookies(e)}></button>
                </form>
                <Link to="/home" >
                    <button>Volver</button>
                </Link>
            </div>
        );
    } else if (registerStatus) {
        return (
            <div>
                <h2>Bienvenido {user.name}</h2>
                <button onClick={(e) => unlogin(e)}>Desloguearse</button>
            </div>
        );
    }
}
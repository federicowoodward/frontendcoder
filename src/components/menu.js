import { useState } from "react"
import { useParams, Navigate } from "react-router-dom";

export default function Menu() {
    const [despedida, setDespedida] = useState(false)
    const { user } = useParams()


    const unlogin = async (e) => {
        e.preventDefault()
        try {
            // crear context para cookies
            // cookiesManager("delete")
            setDespedida(true)
        } catch (err) {
            console.log(err)
        }
        setTimeout(() => {
            setDespedida("ready");
            
        }, 2000)
    }

    if (despedida === "ready") {
        return(
            <Navigate to="/login" />
        )
    }
    if (despedida) {
        return (
            <div>
                <h2 style={{ "color": "black" }}>Hasta luego {user}, vuelve pronto!</h2>
            </div>
        );
    } else {
        return (
            <div>
                <p>{user}</p>
                <h2>Menu</h2>
                <button onClick={(e) => unlogin(e)}>Desloguearse</button>
            </div>
        );
    }
}
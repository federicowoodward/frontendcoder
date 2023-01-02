import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function Login() {
    const [num, setNum] = useState("")
    
    function mensaje() {

        axios.post("http://localhost:8080/products/twilio",{ "num": num}).then(function (response) {alert(response.data)})
    }
    return (
        <div>
            <p>sin +, sin espacios, sin simbolos. ejemplo: 5493512764418</p>
            <input type="text" name="num" onChange={(e) =>{setNum(e.target.value)}}></input>
            <button onClick={mensaje}>mensaje</button>
            <br/>
            <br/>
            <Link to="/login" >
                <button>Loguearse</button>
            </Link>
            <Link to="/register" >
                <button>Registrarse</button>
            </Link>
        </div>
        );
}
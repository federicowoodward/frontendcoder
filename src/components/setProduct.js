import axios from "axios";
import { useState } from "react"

export default function SetProduct() {
    const [product, setProduct] = useState([])    

    function generateProduct(e) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    function sendProduct() {            
        axios.post("http://localhost:8080/products/", {
            product
        }).then(function(response) {
            console.log(response)
        })
    }

    return(
        <div>
            <form>
                <input type="text" name="nombre" placeholder="nombre" onChange={(e) => generateProduct(e)}/>
                <input type="text" name="descripcion" placeholder="descripcion" onChange={(e) => generateProduct(e)}/>
                <input type="text" name="precio" placeholder="precio" onChange={(e) => generateProduct(e)}/>
                <input type="text" name="stock" placeholder="stock" onChange={(e) => generateProduct(e)}/>
            </form>
            <button onClick={sendProduct}>Enviar</button>
        </div>
    )
}
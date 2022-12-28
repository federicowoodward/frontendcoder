import axios from "axios";

export default function Test() {

    const test = async () => {
        const response = await axios.get("http://localhost:8080/products")
        console.log(response.data)
    }
    return (
        <div>
            <button onClick={test}>hola</button>
        </div>
    );
}
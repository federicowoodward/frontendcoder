import axios from "axios";

export default function Test() {

    const test = async () => {
        const response = await axios.get("https://backendcoder.up.railway.app/products")
        console.log(response.data)
    }
    return (
        <div>
            <button onClick={test}>hola</button>
        </div>
    );
}
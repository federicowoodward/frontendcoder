import { createContext, useContext, useState } from "react"; 
import axios from "axios";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext);
}

export default function ProductsContext({children}){
    const [products, setProducts] = useState([])

    function defineProducts(list) {
        setProducts(list)
    }

    function clearCart() {
        udapteCart([])
    }

    function udapteCart(array) {
        setProducts(array);
        // let QA = 0;
        // for(let i = 0; i < array.length; i++) {
            // QA += array[i].quantity;
        // }
        // setQA(QA);
    }

    function clearItem(id) {
        let newProductsList = products;
      
        const result = newProductsList.filter((item) => item._id !== id);

        udapteCart(result);
    }

    async function cookiesManager (identifier, user) {
        
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
                    const { data } = await axios.get("http://localhost:8080/users/cookies");
                    return data
                } catch (err) {
                    console.log("ERROR " + err)
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

    return (
        <cartContext.Provider value={{
            products,
            defineProducts,
            clearCart,
            clearItem,
            cookiesManager
        }}>
            {children}
        </cartContext.Provider> 
    );
} 
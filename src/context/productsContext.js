import { createContext, useContext, useState } from "react"; 

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext);
}

export default function CartContextProv({children}){
    const [products, setProducts] = useState([])

    function defineProducts(list) {
        setProducts(list)
    }

    function detailProduct(id){
        return products.find(item => item._id === id);
    }

    return (
        <cartContext.Provider value={{
            products,
            defineProducts,
            detailProduct
        }}>
            {children}
        </cartContext.Provider> 
    );
} 
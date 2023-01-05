import { useEffect, useState, memo } from "react";
import ItemList from './itemList.js';
import { UseCartContext } from "../../context/productsContext.js";
import Loader from '../loaders/loader.js';
import axios from "axios";
// import "./itemListContainer.css";


function ItemListContainer (){
    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { defineProducts } = UseCartContext()
    let id = 0;
    useEffect(() => {
        axios.get("http://localhost:8080/products/")
        .then ( response => {
            if (response.data.size === 0) {
                console.log("no results!");
            } else {
                setProductsList(response.data)
            }})
            .catch(err => console.log(err))
            .finally(() => {
                defineProducts(productsList)
                setTimeout(() => {
                    setLoading(false)
                }, 0);
            });
        },[id, defineProducts, productsList])
        
    return (
        <div>
            {loading ? <Loader/> :<ItemList products={productsList}/>}
        </div>
    );
};

export default memo(ItemListContainer);
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UseCartContext } from "../../context/productsContext.js";
import axios from "axios";

export default function Detail() {
    const [product, setProduct] = useState([])
    const { detailProduct } = UseCartContext()
    const {id} = useParams()
    
    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`).then(res => {
            setProduct(res.data)             
        })
    }, [id, detailProduct])

    return(
        <div>
            {product.nombre}:<br />
            {product.descripcion}
        </div>
    );
}
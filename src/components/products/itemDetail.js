import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UseCartContext } from "../../context/productsContext.js";

export default function Detail() {
    const [product, setProduct] = useState([])
    const { detailProduct } = UseCartContext()
    const {id} = useParams()
    
    useEffect(() => {
        async function fethData(){
            let response = await detailProduct(id)
            setProduct(response)
        }
        fethData()
    }, [id, detailProduct])



    return(
        <div>
            {product.nombre}:<br />
            {product.descripcion}
        </div>
    );
}
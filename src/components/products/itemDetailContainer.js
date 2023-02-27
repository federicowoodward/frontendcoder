import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UseCartContext } from '../../context/productsContext.js'
import axios from 'axios'
import ItemDetail from "./itemDetail.js"
import ItemCount from '../itemCount/itemCount.js'
import BuyButtons from '../buyButtons/buyButtons.js'

export default function Detail() {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const [inputType, setInputType] = useState('itemCount')
    const { addToCart } = UseCartContext()

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`).then((res) => {
            setProduct(res.data)
        })
    }, [id])
 
    


    return (
        <div>
            <ItemDetail product={product}/>
            <Link to={`/menu/${localStorage.getItem('name')}`}>
                <button>Volver al menu</button>
            </Link>
        </div>
    )
}

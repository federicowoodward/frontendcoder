import { Link } from 'react-router-dom'
import { React } from 'react'
import './item.css'
import axios from 'axios'
export default function Item({ product }) {
    const deleteItem = () => {
        axios.delete(`http://localhost:8080/products/${product._id}`)
    }

    return (
        <div className="flex-item">
            <img className="itemImg" src={product.img} alt={product.nombre} />
            <Link to={`/detail/${product._id}`}>
                <p>{product.precio}</p>
                <p>{product.stock}</p>
            </Link>
            {localStorage.getItem('rol') === "admin" && (
                <button onClick={deleteItem} className="button-delete-item">
                    Borrar item
                </button>
            )}
        </div>
    )
}

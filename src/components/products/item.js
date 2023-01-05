import { Link } from "react-router-dom";
import { React} from 'react';
import './item.css';
export default function Item({ product }){
  return (
        <div className="flex-item">
            <Link to={`/detail/${product._id}`}>  
                <img className="itemImg" src={product.img} alt={product.nombre} />
                <p>{product.precio}</p>
                <p>{product.stock}</p>
            </Link>
        </div>
    );   
}
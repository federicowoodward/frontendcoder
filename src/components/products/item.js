import { Link } from "react-router-dom";
import { React} from 'react';
import './item.css';
export default function Item({ product }){
  return (
        <div className="flexItem">
            <Link to={`/category/itemdetail/${product._id}`}>  
                <img className="itemImg" src={product.img} alt={product.client} title="Agregar imagen?" />
            </Link>
        </div>
    );   
}
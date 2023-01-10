import { UseCartContext } from "../../context/productsContext.js";
import { useState } from "react";
// import "./cartItem.css";
export default function CartItem({item, quantity}) {
    const {clearItem} = UseCartContext();
    const [quantityStatus, udapteQuantityStatus] = useState(quantity);

    function removePhoto() {
        if (quantityStatus === 1) {
            clearItem(item.id);
        } else {
            udapteQuantityStatus(quantity - 1);
        }
    }
    return (
        <div className="cartItem">
            <li>
                <p>Cantidad: {quantityStatus}</p>
                <p>{item.nombre}</p>
                <img className="cartItemImg" src={""} alt={item.descripcion}/> 
                <button onClick={removePhoto}> Borrar </button>
            </li>
        </div>
    );
}
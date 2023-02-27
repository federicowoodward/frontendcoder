import { UseCartContext } from "../../context/productsContext.js";
import { useState } from "react";
export default function CartItem({item, quantity}) {
    const {clearItem} = UseCartContext();
    const [quantityStatus, udapteQuantityStatus] = useState(quantity);

    function removeItem() {
        if (quantityStatus === 1) {
            clearItem(item.id);
        } else {
            udapteQuantityStatus(quantityStatus - 1);
        }
    }
    return (
        <div>
            <li>
                <p>Cantidad: {quantityStatus}</p>
                <p>{item.nombre}</p>
                <button onClick={removeItem}>
                    delete
                </button>
            </li>
        </div>
    );
}
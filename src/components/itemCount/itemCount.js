import React, { useState } from 'react'
export default function Itemquantity({ initial, stock, onAdd }) {
    const [quantity, setQuantity] = useState(initial)
    const add = () => {
        if (quantity < stock) setQuantity(quantity + 1)
    }
    const less = () => setQuantity(quantity - 1)
    if (quantity === 0) {
        setQuantity(quantity + 1)
    }

    function addItem() {
        onAdd(quantity)
    }

    return (
        <div>
            <span>
                <p>{quantity}</p>
            </span>
            <div>
                <span>
                    <button onClick={add}>
                        <span onClick={add}> + </span>
                    </button>
                    <button onClick={less}>
                        <span onClick={less}> - </span>
                    </button>
                </span>
                <button>
                    <span onClick={addItem}> Añadir al carrito </span>
                </button>
            </div>
        </div>
    )
}

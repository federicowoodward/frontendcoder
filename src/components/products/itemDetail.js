import { UseCartContext } from '../../context/productsContext'
import { useState } from 'react'
import BuyButtons from '../buyButtons/buyButtons.js'
import ItemCount from '../itemCount/itemCount.js'

export default function ItemDetail({ product }) {
    const [inputType, setInputType] = useState('itemCount')
    const { addToCart } = UseCartContext()

    function onAdd(quantity) {
        addToCart({ product, quantity })
        setInputType('buyButtons')
    }

    return (
        <div>
            <p>{product.nombre}</p>
            <p>{product.descripcion}</p>
            <p>{product.stock}</p>
            <p>{product.precio}</p>
            {inputType === 'buyButtons' ? (
                <BuyButtons />
            ) : (
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            )}
        </div>
    )
}

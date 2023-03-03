import { UseCartContext } from '../../context/productsContext.js'
import { Link } from 'react-router-dom'
import CartItem from './cartItem.js'
import { useEffect } from 'react'

export default function Cart() {
    const { clearCart, products, updateCartInServer } = UseCartContext()

    useEffect(() => {
        updateCartInServer()
    })

    if (products.length !== 0) {
        return (
            <div>
                <h2> Haz agregado las siguientes fotos:</h2>
                <div>
                    {products.map((item) => (
                        <CartItem
                            key={item.product._id}
                            item={item.product}
                            quantity={item.quantity}
                        />
                    ))}
                </div>
                <div>
                    <div>
                        <button onClick={clearCart}>
                            <span>Vaciar</span>
                        </button>
                        <Link to={`/menu/${localStorage.getItem("name")}`}>
                            <button>Seguir agregando.</button>
                        </Link>
                    </div>
                    {/* <Link to="/order"> */}
                    {/* <button> */}
                    {/* <span className="button_top" >Enviar pedido</span> */}J
                    {/* </button> */}
                    {/* </Link> */}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2>No hay productos actualmente.</h2>
                <Link to={`/menu/${localStorage.getItem("name")}`}>
                    <button>Agrega productos!</button>
                </Link>
            </div>
        )
    }
}

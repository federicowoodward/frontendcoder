import './cartAdminItem.css'
import CartAdminProduct from './cartAdminProduct';
export default function CartAdminItem({ cart }) {
    return (
        <div className='cartAdminItem'>
            {cart.user}
            {cart.productos.map((product) => 
                <CartAdminProduct key={cart.user} product={product.product}/>
            )}
            {
                cart.productos.length === 0 && <p>Este carrito no tiene productos.</p>
            }
        </div>
    )
}

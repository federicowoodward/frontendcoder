import { UseCartContext } from "../../context/productsContext.js";
import { Link } from "react-router-dom";
import CartItem from "./cartItem.js"; 
// import "./cartWithItem.css";
// import "./cart.css";

export default function Cart() {
    const {products, clearCart} = UseCartContext();
 
    if (products.length!==0) { 
        return (
            <div className="cartWithItems">
                <h2> Haz agregado las siguientes fotos:</h2>
                <div className="itemsContainer">
                    {products.map(item => <CartItem key={item._id} item={item} quantity={1}/>)}
                </div>
                <div className="cartButtons">
                    <div className="clearCartButton">
                        <button className="noselect" onClick={clearCart}>
                            <span className="text">Vaciar</span>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <Link to="/order">
                        <button>
                            <span className="button_top" >Enviar pedido</span>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="cart">
                <h2>No hay fotos agregadas.</h2>
                <Link to="/category/">
                    <div className="fancy">
                        <span className="top-key"></span>
                        <span className="text">Agrega fotos!</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </div>
                </Link>
            </div>
        );
    }
}
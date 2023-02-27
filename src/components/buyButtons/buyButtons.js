import { Link } from "react-router-dom";
// import "./buyButtons.css";
export default function BuyButtons() {
    return (
        <div className="buyButtons">
            <Link to='/cart'>
                <button>
                    <span className="button_top" >Ver carrito</span>
                </button>
            </Link>
            <Link to={`/menu/${localStorage.getItem("name")}`}>
                    <button>Agrega productos!</button>
                </Link>
        </div>
    );
}
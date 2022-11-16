import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div>
            <Link to="/login" >
                <button>Loguearse</button>
            </Link>
            <Link to="/register" >
                <button>Registrarse</button>
            </Link>
        </div>
        );
}
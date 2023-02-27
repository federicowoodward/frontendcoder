import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginIndex from "./components/login&register/loginIndex.js";
import Register from "./components/login&register/register/register";
import Login from "./components/login&register/login/login.js";
import Menu from "./components/menu/menu.js";
import NavBar from "./components/navBar/navBar.js";
import ItemDetailContainer from "./components/products/itemDetailContainer.js";
import CartContextProvider from "./context/productsContext.js";
import Cart from "./components/cart/cart.js";
function App() {
    return (
        <BrowserRouter>
            <CartContextProvider value={{}}>
                <div className="app">
                        <NavBar />
                    <Routes>
                        <Route path="/" element={<LoginIndex />}/>
                        <Route path="/cart" element={<Cart />}/>
                        <Route path="/home" element={<LoginIndex />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/menu/:user" element={< Menu />}/>
                        <Route path="/detail/:id" element={< ItemDetailContainer />}/>
                    </Routes>
                </div>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;

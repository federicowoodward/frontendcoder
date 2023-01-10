import LoginIndex from "./components/loginIndex.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Menu from "./components/menu";
import NavBar from "./components/navBar.js";
// import ItemListContainer from "./components/products/itemListContainer.js";
import ItemDetail from "./components/products/itemDetail.js";
import CartContextProvider from "./context/productsContext.js";
import Cart from "./components/cart/cart.js";

function App() {
    return (
        <BrowserRouter>
            <CartContextProvider value={{}}>
                <div className="app">
                        <NavBar />
                        {/* <ItemListContainer /> */}
                    <Routes>
                        <Route path="/" element={<LoginIndex />}/>
                        <Route path="/cart" element={<Cart />}/>
                        <Route path="/home" element={<LoginIndex />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/menu/:user" element={< Menu />}/>
                        <Route path="/detail/:id" element={< ItemDetail />}/>
                    </Routes>
                </div>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;

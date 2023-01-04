import LoginIndex from "./components/loginIndex.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Menu from "./components/menu";
import NavBar from "./components/navBar.js";
import ItemListContainer from "./components/products/itemListContainer.js";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                    <NavBar />
                    <ItemListContainer />
                <Routes>
                    <Route path="/" element={<LoginIndex />}/>
                    <Route path="/home" element={<LoginIndex />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/menu/:user" element={< Menu />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

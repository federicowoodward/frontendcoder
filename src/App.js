import LoginIndex from "./components/loginIndex.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import "./app.css"
function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<LoginIndex />}/>
                    <Route path="/home" element={<LoginIndex />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

import LoginIndex from "./components/loginIndex.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                navbar
                <Routes>
                    <Route path="/" element={<LoginIndex />}/>
                    <Route path="/home" element={<LoginIndex />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
                footer
            </div>
        </BrowserRouter>
    );
}

export default App;

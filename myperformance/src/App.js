import React, {useEffect} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import "./App.css";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from "./components/navbar/Navbar"
import Activate from "./pages/ActivateUser";
import Profile from "./pages/Profile";
import Schedule from "./pages/Schedule";


function App() {
    

    const [user, setUser] = React.useState("");

    
    return ( 
        <div>
            <BrowserRouter>
                <Navbar user={user.username}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<Profile user={user}/>}/>
                    <Route path="/activate/:token" element={<Activate/>}/>
                    <Route path="/schedule" element={<Schedule/>}/>
                </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
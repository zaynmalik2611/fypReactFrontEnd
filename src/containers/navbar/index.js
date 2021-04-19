import {  } from "../../components";
import './style.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className="navDiv">
            <nav className="navbar">
                <Link className="navLinks" to="/">Home</Link>
                <Link className="navLinks" to="/communities">Communities</Link>
                <Link className="navLinks" to="/settings">Settings</Link>
                <Link className="navLinks" to="/login">Login</Link>
                <Link className="navLinks" to="/signup">Sign Up</Link>    
            </nav>
        </div>
    );
}
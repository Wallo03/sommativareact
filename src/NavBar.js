import React from "react";
import ReactDOM  from "react-dom/client";


function NavBar() {
    
    return(
        <nav className="NavBar">
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
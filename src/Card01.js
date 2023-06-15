import React from "react";
import ReactDOM  from "react-dom/client";
import zoro from "./Zoro.avif";
import midoriya from "./Midoriya.jpg";
import doctor from "./Dottor.jpg";

function Card01() {
    return(
        <div className="Div">
        <div className="Card01">
            <img className="img" src={midoriya} alt="Midoriya"/>

                <p className="heading"><label>Midoriya</label></p>
                <p className="heading"><label>Izuku</label></p>
     
                <button className="btn">Accesso Admin</button>
            </div>
        <div className="Card01">
            <img className="img" src={zoro} alt="Zoro"/>

                <p className="heading"><label>Zoro</label></p>
                <p className="heading"><label>Roronoa</label></p>
     
                <button className="btn">Accesso Admin</button>
            </div>
        <div className="Card01">
            <img className="img" src={doctor} alt="Dr.Stone"/>

                <p className="heading"><label>Senku </label></p>
                <p className="heading"><label>Ishigami</label></p>
     
                <button className="btn">Accesso User</button>
            </div>
        </div>
  
    
        
    )   
}

export default Card01;
import React from "react";
import { FaEnvelope } from "react-icons/fa6";

export default function PersonalyInfo(){
    return(
        <div className="header">
            <img src={require("../img/photo_2023-03-21_18-53-57.jpg")}/>
            <div className="info-box">
                <h1>Marharyta Prachuk</h1>
                <h3>Frontend Developer</h3>
                <h4>+380501092737</h4>
            </div>
            <a href="mailto:margo1702prachuk@gmail.com">
                <button type="button" className="email-button"><FaEnvelope className="envelope"/>Email</button>
            </a>
        </div>
    )
}
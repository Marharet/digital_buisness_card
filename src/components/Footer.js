import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="footer">
            <div className="networks">
                <a  href="https://www.linkedin.com/in/marharyta-prachuk-b5b849206/" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/Marharet" target="_blank"><FaSquareGithub /></a>
            </div>
        </div>
    )
}
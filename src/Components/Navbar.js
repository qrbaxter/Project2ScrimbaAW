import React from "react"
import "../style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";




export default function Navbar() {
    return (
        <nav className="nav">
            <FontAwesomeIcon icon={faEarthEurope} className="nav--logo" />
           <h1 className="nav--title">my Travel Journal.</h1>
        </nav>
    )
}
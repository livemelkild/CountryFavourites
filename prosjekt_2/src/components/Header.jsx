import React from "react"
import sound from "./mp3/usher.mp3";


function Header() {
    return(
        <header> <h1> Hvilket land vil du reise til? </h1>
        <audio controls src = {sound} autoPlay />
        </header>
    )
}

export default Header;

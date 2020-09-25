import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const themeContext = useContext(ThemeContext)!;

    return(
        <header className = {` ${themeContext.theme === 'light' ?  '': 'dark'}`}><h1>Hvilket land vil du reise til?</h1></header>
    )
}

export default Header;

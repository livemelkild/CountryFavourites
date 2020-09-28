import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  function chooseTheme() {
    let chosenTheme;
    //trykke knapp 1
    if(themeContext.theme === 'light'){
      chosenTheme = 'light';
    }
    //trykke knapp 2
    if(themeContext.theme === 'colorful'){
      chosenTheme = 'colorful';
    }
    //trykke knapp 3
    if(themeContext.theme === 'dark'){
      chosenTheme = 'dark';
    }
    return chosenTheme;

  }
  const themeContext = useContext(ThemeContext)!;

    return(
        <header className = {chooseTheme()}><h1>Hvilket land vil du reise til?</h1></header>
    )
}

export default Header;

import React, {useState, useEffect, useContext} from "react";
import { ThemeContext } from './ThemeContext'
import Country from "./Country";
import SessionStorage from "./SessionStorage";
import {Link} from "react-router-dom";

//import Map from "../Image/map_1.svg";
const portuguese_sound = "./mp3/Portuguese.mp3";
const norwegian_sound = "./mp3/Norwegian.mp3";
const greek_sound = "./mp3/Greek.mp3";
const italian_sound = "./mp3/Italian.mp3";

function Country_spec(){
  //Liste over bildene. Liste_1 er over de ulike kartene som dukker opp som startbilde, liste_2 er bildene det skal skiftes til

    const themeContext = useContext(ThemeContext)!;

    let liste_1 = ["/Image/map_1.svg", "/Image/italy.svg",
    "/Image/portugal.svg", "/Image/greece.svg" ]
    let liste_2 = ["/Image/viking.svg", "/Image/wine.svg",
    "/Image/fotball.svg", "/Image/athen.svg"]

    let names = ["Norway", "Italia", "Portugal", "Hellas"];
    let sound_list = [norwegian_sound,italian_sound,portuguese_sound, greek_sound]

// lager variabel for hvert av de første bildene slik at jeg kan endre variabelen til et annet bilde senere

//entrer state til img

    const [img, setImage] = useState([false, false, false, false])
    const [imageUrls, setImageUrls] = useState([liste_1[0], liste_1[1], liste_1[2], liste_1[3]]);

    function swapImage(index: number, prevState: boolean) {
      const imageUrlState = imageUrls;
      for (let i = 0; i < img.length; i++){
        if (img[i]){
          imageUrlState[i] = liste_2[i];
        } else {
          imageUrlState[i] = liste_1[i];
        }
      }
      setImageUrls([...imageUrlState]);
    }

    function changeImage(index: number, prevState: boolean) {
      const imgState = img;
      imgState[index] = !prevState;
      setImage(imgState);
    }

    const content = imageUrls.map((url, index) => {
      return   <div key={index * 3} className ="country">
              <Country
              theme={themeContext.theme}
              name = {names[index]}
              sound = {sound_list[index]}
              description = "By pressing play you can practice the word 'hi' in this country:"
              img = {imageUrls[index]}
              onClick = {() => {
                changeImage(index, img[index]);
                swapImage(index, img[index])
              }}
              />
        </div>
    })

    return(
      <div>
      <button onClick={() => {
        if (themeContext.theme === 'light'){
          themeContext.setTheme('dark');
        } else {
          themeContext.setTheme('light');
        }
      }}>Bytt tema</button>
        <div className = "total-c">
        {content}
        <br />
        <SessionStorage />
        <Link className = "back_to_start" to="/">
                    <p>Tilbake til startside</p>
        </Link>
        </div>
        </div>
    )
}

export default Country_spec;

import React, {useState, useEffect, useContext} from "react";
import Country from "./Country";
import SessionStorage from "./SessionStorage";
import {Link} from "react-router-dom";
import usePoem from "./usePoem";
import { ThemeContext } from "./ThemeContext";

//import Map from "../Image/map_1.svg";

const german_sound = require("./mp3/German.mp3");
const french_sound = require("./mp3/French.mp3");
const spanish_sound = require("./mp3/Spanish.mp3");
const english_sound = require("./mp3/english.mp3");
const portuguese_sound = require("./mp3/Portuguese.mp3");
const norwegian_sound = require("./mp3/Norwegian.mp3");
const greek_sound = require("./mp3/Greek.mp3");
const italian_sound = require("./mp3/Italian.mp3");

function Country_spec(){

  const themeContext = useContext(ThemeContext)!;


   const poem_italy = usePoem("A Death blow is a Life blow to Some");
   const poem_norway = usePoem("When Memory is full");
   const poem_greece = usePoem("liss is the plaything of the child --");
   const poem_portugal = usePoem("Beauty crowds me till I die");
   const poem_england = usePoem("Too happy Time dissolves itself");
   const poem_germnay = usePoem("Of life to own --");
   const poem_france = usePoem("The Butterfly in honored Dust");
   const poem_spain = usePoem("No Autumn's intercepting Chill");



  let poem_list = [poem_norway, poem_italy,poem_portugal,poem_greece, poem_england,poem_germnay, poem_france,poem_spain]

    let liste_1 = ["/Image/map_1.svg", "/Image/italy.svg",
    "/Image/portugal.svg", "/Image/greece.svg", "/Image/england.svg", "/Image/germany.svg",
    "/Image/france.svg", "/Image/spain.svg"  ]
    let liste_2 = ["/Image/viking.svg", "/Image/wine.svg",
    "/Image/fotball.svg", "/Image/athen.svg","/Image/phone-box.svg", "/Image/waitress.svg",
    "/Image/croissant.svg", "/Image/sangria.svg"]


    let names = ["Norge", "Italia", "Portugal", "Hellas", "England", "Tyskland", "Frankrike", "Spania"];
    let sound_list = [norwegian_sound,italian_sound,portuguese_sound, greek_sound, english_sound,german_sound,french_sound, spanish_sound]

    const [img, setImage] = useState([false, false, false, false, false, false, false, false])
    const [imageUrls, setImageUrls] = useState([liste_1[0], liste_1[1], liste_1[2], liste_1[3], liste_1[4], liste_1[5], liste_1[6], liste_1[7]]);

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
      return   <div key={index * 3} className = "country" >
              <Country
              theme = {themeContext.theme}
              name = {names[index]}
              sound = {sound_list[index]}
              description = {poem_list[index]}
              img = {imageUrls[index]}
              onClick = {() => {
                changeImage(index, img[index]);
                swapImage(index, img[index])
              }}
              />
        </div>
    })

    function darkClick(){

    }

    return(
      <div>
      <div className = "temaKnapper">
       <button className= "knappDark" onClick={() => {
         themeContext.setTheme('dark');
       }}>Bytt tema 1</button>
      <button className = "knappColorful" onClick={() => {

          themeContext.setTheme('colorful');

        }
      }>Bytt tema 2</button>


      <button className = "tittel" onClick={() => {
           themeContext.setTheme('light');
       }}>Bytt tema 3</button>
       </div>
        <div className="content_box">
          <div className = "total-c">
            {content}
          <br />
          </div>
        </div>
        <div className="bottom">
          <div></div>
          <div className = "footer">
                <SessionStorage />
            </div>
            <Link className = "back_to_start" to="/">
                    <p>Tilbake til startside</p>
            </Link>
        </div>
        </div>
    )
}

export default Country_spec;

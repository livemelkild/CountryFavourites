import React, {useState, useEffect} from "react";
import Country from "./Country";
import SessionStorage from "./SessionStorage";
import {Link} from "react-router-dom";

import usePoem from "./usePoem";

//import Map from "../Image/map_1.svg";
import italian_sound from "./mp3/Italian.mp3";
import portuguese_sound from "./mp3/Portuguese.mp3";
import norwegian_sound from "./mp3/Norwegian.mp3";
import greek_sound from "./mp3/Greek.mp3";
import german_sound from "./mp3/German.mp3";
import french_sound from "./mp3/French.mp3";
import spanish_sound from "./mp3/Spanish.mp3";
import english_sound from "./mp3/Greek.mp3";

function Country_spec(){


   const poem_italy = JSON.stringify(usePoem("In this short Life"));
   const poem_norway = JSON.stringify(usePoem("In this short Life"));
   const poem_greece = JSON.stringify(usePoem("In this short Life"));
   const poem_portugal = JSON.stringify(usePoem("In this short Life"));



  let poem_list = [poem_norway, poem_italy,poem_portugal,poem_greece,poem_norway, poem_italy,poem_greece,poem_greece]

    let liste_1 = ["/Image/map_1.svg", "/Image/italy.svg",
    "/Image/portugal.svg", "/Image/greece.svg", "/Image/england.svg", "/Image/germany.svg",
    "/Image/france.svg", "/Image/spain.svg"  ]
    let liste_2 = ["/Image/viking.svg", "/Image/wine.svg",
    "/Image/fotball.svg", "/Image/athen.svg","/Image/phone-box.svg", "/Image/waitress.svg",
    "/Image/croissant.svg", "/Image/sangria.svg"]

    let names = ["Norway", "Italia", "Portugal", "Hellas", "England", "Tyskland", "Frankrike", "Spania"];
    let sound_list = [norwegian_sound,italian_sound,portuguese_sound, greek_sound, greek_sound,german_sound,french_sound, spanish_sound]

    const [img, setImage] = useState([false, false, false, false, false, false, false, false])
    const [imageUrls, setImageUrls] = useState([liste_1[0], liste_1[1], liste_1[2], liste_1[3], liste_1[4], liste_1[5], liste_1[6], liste_1[7]]);

    function swapImage(index, prevState) {
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

    function changeImage(index, prevState) {
      const imgState = img;
      imgState[index] = !prevState;
      setImage(imgState);
    }

    const content = imageUrls.map((url, index) => {
      return   <div key={index * 3} className = "country" >
              <Country
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

    return(

        <div className = "total-c">
        {content}
        <br />
        <SessionStorage />
        <Link className = "back_to_start" to="/">
                    <p>Tilbake til startside</p>
        </Link>
        </div>
    )
}

export default Country_spec;

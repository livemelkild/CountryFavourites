import React, {useState, useEffect} from "react";
import Country from "./Country";
import SessionStorage from "./SessionStorage";
import {Link} from "react-router-dom";

//import Map from "../Image/map_1.svg";
import italian_sound from "./mp3/Italian.mp3";
import portuguese_sound from "./mp3/Portuguese.mp3";
import norwegian_sound from "./mp3/Norwegian.mp3";
import greek_sound from "./mp3/Greek.mp3";


function Country_spec(){
  //Liste over bildene. Liste_1 er over de ulike kartene som dukker opp som startbilde, liste_2 er bildene det skal skiftes til
    let liste_1 = ["/Image/map_1.svg", "/Image/italy.svg",
    "/Image/portugal.svg", "/Image/greece.svg" ]
    let liste_2 = ["/Image/viking.svg", "/Image/wine.svg",
    "/Image/fotball.svg", "/Image/athen.svg"]

    let names = ["Norway", "Italia", "Portugal", "Hellas"];
    let sound_list = [norwegian_sound,italian_sound,portuguese_sound, greek_sound]

// lager variabel for hvert av de første bildene slik at jeg kan endre variabelen til et annet bilde senere

//entrer state til img

<<<<<<< HEAD
    const setImage = (img) => {
          setImage() ;
   };

    function swapImage() {
          console.log("hi")
            if( img === true) {
                  img_1 = liste_2[0]
            }
      }

    function swapImage2() {
      console.log("hello");
        if( img === true) {
          img_2 = liste_2[0]
=======
    const [img, setImage] = useState([false, false, false, false])
    const [imageUrls, setImageUrls] = useState([liste_1[0], liste_1[1], liste_1[2], liste_1[3]]);

    function swapImage(index, prevState) {
      const imageUrlState = imageUrls;
      for (let i = 0; i < img.length; i++){
        if (img[i]){
          imageUrlState[i] = liste_2[i];
        } else {
          imageUrlState[i] = liste_1[i];
>>>>>>> caa858d8b75f61c0bfc89d7fad530875e08a33df
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

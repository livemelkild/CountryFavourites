import React, {useState, useEffect} from "react";
import Country from "./Country";
//import Map from "../Image/map_1.svg";

function Country_spec(){
  //Liste over bildene. Liste_1 er over de ulike kartene som dukker opp som startbilde, liste_2 er bildene det skal skiftes til
    let liste_1 = ["/Image/map_1.svg", "/Image/italy.svg",
    "/Image/portugal.svg", "/Image/greece.svg" ]
    let liste_2 = ["/Image/viking.svg", "/Image/wine.svg",
    "/Image/fotball.svg", "/Image/athen.svg"]

    let names = ["Norway", "Italia", "Portugal", "Hellas"];

// lager variabel for hvert av de første bildene slik at jeg kan endre variabelen til et annet bilde senere

//entrer state til img
    const [img, setImage] = useState([false, false, false, false])
    const [imageUrls, setImageUrls] = useState([liste_1[0], liste_1[1], liste_1[2], liste_1[3]]);

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
              description = "vi er glad i vikinger"
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
        </div>
    )
}

export default Country_spec;

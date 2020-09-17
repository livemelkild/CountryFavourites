import React, {useState} from "react";
import Country from "./Country";
//import Map from "../Image/map_1.svg";

function Country_spec(){
  //Liste over bildene. Liste_1 er over de ulike kartene som dukker opp som startbilde, liste_2 er bildene det skal skiftes til
    let liste_1 = ["/Image/map_1.svg", "/Image/italy.svg",
    "/Image/portugal.svg", "/Image/greece.svg" ]
    let liste_2 = ["/Image/viking.svg", "/Image/wine.svg",
    "/Image/fotball.svg", "/Image/athen.svg"]

// lager variabel for hvert av de første bildene slik at jeg kan endre variabelen til et annet bilde senere
    let img_1 = liste_1[0]
    let img_2 = liste_1[1]
    let img_3 = liste_1[2]
    let img_4 = liste_1[3]

//entrer state til img
    const [img, setImage] = useState(false)

    function swapImage() {
      console.log("hi");
        if( img === false) {
          img_1 = "/Image/viking.svg"
        }
    }
    function swapImage2() {
      console.log("hello");
        if( img === true) {
          img_2 = liste_2[0]
        }
    }

    return(
        <div className = "total-c">
          <div className ="norway">
                <Country
                name = "Norway"
                description = "vi er glad i vikinger"
                img = {img_1}
                onClick = {() => {
                  setImage(!img);
                  swapImage();
                }}
                />
          </div>

          <div className = "italy">
                <Country
                name = "Italy"
                description = "Italia liker å drikke vin"
                img = {img_2}
                onClick = {() => {
                  setImage(!img);
                  swapImage2();
              }}
              />
          </div>
          <div className = "portugal">
                <Country
                name = "Portugal"
                description = "Christianio Ronaldo er fra Portogal"
                img = {img_3}
                onClick = {() => {
                  setImage(!img);
                  swapImage2();
              }}
          />
          </div>
          <div className = "greece">
                <Country
                name = "Greece"
                description = "Greske filosofer og salat"
                img = {img_4}
                onClick = {() => {
                  setImage(!img);
                  swapImage2();
              }}
              />
          </div>
          <div className ="norway">
                <Country
                name = "Norway"
                description = "vi er glad i vikinger"
                img = {img_1}
                onClick = {() => {
                  setImage(!img);
                  swapImage();
                }}
                />
          </div>

          <div className = "italy">
                <Country
                name = "Italy"
                description = "Italia liker å drikke vin"
                img = {img_2}
                onClick = {() => {
                  setImage(!img);
                  swapImage2();
              }}
              />
          </div>
          <div className = "portugal">
                <Country
                name = "Portugal"
                description = "Christianio Ronaldo er fra Portogal"
                img = {img_3}
                onClick = {() => {
                  setImage(!img);
                  swapImage2();
              }}
          />
          </div>
          <div className = "greece">
                <Country
                name = "Greece"
                description = "Greske filosofer og salat"
                img = {img_4}
                onClick = {() => {
                  setImage(!img);
                  swapImage2();
              }}
              />
          </div>
        </div>
    )
}

export default Country_spec;

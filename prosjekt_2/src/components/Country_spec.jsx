import React, {useState} from "react";
import Country from "./Country";
//import Map from "../Image/map_1.svg";

function Country_spec(){
  //funksjon som bytter ut linkene

  //lage kliste for alle landene/ beskrivelsene også hentet ut variablene

  //lage en liste med linkene fra svg filen og lage on click funskjon som endrer bildene
  //toggle


    let liste_1 = ["/Image/map_1.svg", "/Image/italy.svg" ]
    let liste_2 = ["/Image/viking.svg", "/Image/wine.svg"]

    let img_1 = liste_1[0]
    let img_2 = liste_1[1]

    const [img, setImage] = useState(false)

    function swapImage() {
        if( img === true) {
          img_1 = liste_2[0]
        }
    }
    function swapImage() {
        if( img === true) {
          img_1 = liste_2[0]
        }
    }

    return(
        <div className = "total-c">
            <Country
            name = "Norway"
            description = "vi er glad i vikinger"
            img = {img_1}
            onClick = {() => {
              setImage(!img);
              swapImage();
          }}
          />

            />
            <Country
            name = "Italy"
            description = "Italia liker å drikke vin"
            img = {img_2}
            onClick = {() => {
              setImage(!img);
              swapImage();
          }}
          />


        </div>
    )
}

export default Country_spec;

import React, {useState} from "react";
import Country from "./Country";

function Country_spec(){
  //funksjon som bytter ut linkene

  //lage kliste for alle landene/ beskrivelsene også hentet ut variablene

  //lage en liste med linkene fra svg filen og lage on click funskjon som endrer bildene
  //toggle
  liste_1 = [../imgae/bilde1.svg, ]
  liste_2 = [../imgae/bilde1.svg, ]

  const [img, setImage] = useState(false)
  let img_1 = "../Image/map.svg"

  function swapImage() {
      if( img === true) {
        img_1 = liste_2[0]
      }
  }

    return(
        <div className = "total-c">
        {img}

            <Country
            name = "Colombia"
            description = "Teste Colombia"
            img = img_1;
            onClick = {() => {
              setImage(!img);
              swapImage();
              console.log(img);
          }}
            />
            <Country
            name = "Norway"
            description = "Teste Norway"
            />
            <Country
            name = "Italy"
            description = "Teste Italy"
            />
            <Country
            name = "Norway"
            description = "Teste Norway"
            />
            <Country
            name = "Colombia"
            description = "Teste Colombia"
            />
            <Country
            name = "Norway"
            description = "Teste Norway"
            />
            <Country
            name = "Italy"
            description = "Teste Italy"
            />
            <Country
            name = "Norway"
            description = "Teste Norway"
            />
        </div>
    )
}

export default Country_spec;

import React, {useState, useEffect} from "react";


interface countryProps{
  name: string;
  description: string;
  sound : string;
  img: string;
  theme: 'light' | 'dark';
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

let dataLocal: boolean;


function Country(props: countryProps) {

  //isFavorite er en variabel som er satt til false, og setIsFavorite er en funksjon som kan brukes hvor jeg vil
  const [isFavorite, setIsFavorite] = useState(false);


  const handleClick = () => {
    setDataLocal(!isFavorite);
    getData();
  }

  const setDataLocal = (isSaved:boolean) => {
    //set data with localstorage
    localStorage.setItem(props.name, JSON.stringify(isSaved));
  }

  const getData = () => {
    let dataLocal = JSON.parse(localStorage.getItem(props.name!) as string);
    console.log(dataLocal);
    setIsFavorite(dataLocal);
    }

  useEffect(() => {getData()}, [])

  console.log(props.theme);

  return(
      <div className = {`country ${props.theme === 'light' ?  '': 'dark'}`}>
          <h1>{props.name}</h1>
          <p> {props.description}</p>
          <div id = "sound">
            <audio controls src = {require(process.env.PUBLIC_URL + props.sound)} />
          </div>
            <div id ="image_style" onClick = {props.onClick}>
            <div id = "image">
              <img src = {process.env.PUBLIC_URL + props.img} alt = "img"/>
            </div>
            </div>
            <br/>
          <div id="like">
          {isFavorite && <div className="saved"  onClick={() => handleClick()} > <img src={process.env.PUBLIC_URL + "./Image/photo_like/ikke_hjerte.png"} alt="hjerte" width="25" height="20"/></div>}
          {!isFavorite && <div className="saved"  onClick={() => handleClick()} > <img src={process.env.PUBLIC_URL + "./Image/photo_like/hjerte.png"} alt="hjerte" width="25" height="20"/></div>}
          </div>

      </div>
  )
}

export default Country;

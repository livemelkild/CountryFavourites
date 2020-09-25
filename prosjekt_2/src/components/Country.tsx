import React, {useState, useEffect} from "react";
import { StringLiteral } from "typescript";

interface PoemI{
  title: string;
  author: string;
  lines: string[];
  linecount: string;
}

interface countryProps{
  name: string;
  description: PoemI;
  sound : string;
  img: string;
  theme: 'light' | 'dark';
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

let dataLocal: boolean;
let dataSession: boolean;

function Country(props: countryProps) {


  //isFavorite er en variabel som er satt til false, og setIsFavorite er en funksjon som kan brukes hvor jeg vil
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => {
    setDataLocal(!isFavorite);
    console.log(localStorage.getItem(props.name))
    getData();
    }

  const setDataLocal = (isSaved: boolean) => {
    //set data with localstorage
    localStorage.setItem(props.name, JSON.stringify(isSaved));
  }

  const getData = () => {
    let dataLocal = JSON.parse(localStorage.getItem(props.name) || "false") as boolean;
    console.log(dataLocal);
    setIsFavorite(dataLocal);
    }

  useEffect(() => {
    getData()
  }, [])

  useEffect(()=> {
    console.log(props.
    description);
  }, [props.
  description])

console.log(props.theme)



useEffect(() => {
  getData()
}, [])

  return(
    <div className="content_box">
      <div className = {`country ${props.theme === 'light' ?  '': 'dark'}`}>
          <h1>{props.name}</h1>
          {props.description && (
              <div className = "poem">
              <div className="save_poem" onClick={() => savePoem()}> </div>
              <p><b> {props.description[0].title}</b></p>
              { props.description[0].lines.map((line, i) => (
                <p>{line}</p>
              ))}
              </div>
            )}
          <div id = "sound">
            <audio controls src = {props.sound} />
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

    </div>
  )
}

export default Country;

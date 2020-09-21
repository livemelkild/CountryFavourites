import React, {useEffect} from "react"
import style from "./Country.css"



function Country(props) {


  return(
      <div className = "country" onClick = {props.onClick}>
        <h1>{props.name}</h1>
        <p> {props.description}</p>
        <div id = "image">
          <img src = {process.env.PUBLIC_URL + props.img} alt = "img"/>
        </div>
      </div>
  )
}

export default Country;

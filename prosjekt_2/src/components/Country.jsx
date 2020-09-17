import React from "react"




function Country(props) {
  return(
      <button className = "country" onClick = {props.onClick}>
        <h1>{props.name}</h1>
        <p> {props.description}</p>
        <img src = {props.img} />
      </button>
  )
}

export default Country;

import React from "react"

function Country(props) {
  return(
    <div className = "country">
      <h1>{props.name}</h1>
      <p> {props.description}</p>
      <img
      className = "circle-img"
      src={props.img}
      alt= "avatar_img"/>
    </div>
  )
}

export default Country;

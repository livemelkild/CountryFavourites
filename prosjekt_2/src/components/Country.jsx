import React from "react"


function Country(props) {
  return(
      <button className = "country" onClick = {props.onClick}>
        <h1>{props.name}</h1>
        <p> {props.description}</p>
        <div className = "image">
          <button>
            <img src = {process.env.PUBLIC_URL + props.img} alt = "img"/>
          </button>
        </div>
      </button>
  )
}

export default Country;

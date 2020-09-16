import React from "react"

function Country(props) {
  return(
    <div className = "country">
      <h1>{props.name}</h1>
      <p> {props.description}</p>
      <image> {props.logo}  </image>
    </div>
  )
}

export default Country;

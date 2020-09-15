import React from "react"

function Country(props) {
  return(
    <wrapper>
      <div className = "country">
        <h1>{props.name}</h1>
        <p> {props.description}</p>
      </div>
    </wrapper>
  )
}

export default Country;

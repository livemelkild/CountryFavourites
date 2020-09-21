import React from 'react';
import { ReactComponent as Circe} from "./animation_img/circle.svg";
import style from "./animation_img/circle.css";

/*
function Animation() {

  let circle = "/Image/circle.svg";
  return (
    <div>
      <animation>
        <img src = {process.env.PUBLIC_URL + {circle}} alt = "circle"/>
     </animation>
    </div>
  )
}

*/
const Animation = () => (

  <div className = {style.circle} >
    <Circe />
  </div>
);

export default Animation;

import React from "react";
import usePoem from "./usePoem";

 const Poem = () =>  {
  const poem = JSON.stringify(usePoem("In this short Life"));
  console.log(poem);
  return(
    <div>
      <p> {poem} </p>
    </div>
  )
}

export default Poem;

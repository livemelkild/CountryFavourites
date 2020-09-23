import React, {useState, useEffect} from "react";


/*
interface Ipoem {
  title: String;
}
*/

const usePoem = ( title) => {
  const [poem, setPoem] = useState();
  const api_url = ("https://poetrydb.org/title/" + title);
  console.log("hei");

  useEffect(() => {

    async function getPoem() {
      const response = await fetch (api_url);
      const data = await response.json();
      setPoem(data);
      console.log(data);
    }
    if(poem == undefined){
      getPoem();
    }
  })
  return poem;
}

export default usePoem;

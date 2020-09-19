import React from "react";
//import Country_spec from "./Country_spec";

export class SessionStorage extends React.Component {

    setDataSession(country){
 
       // let favCountry = Country_spec.getItem("Norway");
        console.log(country)
        //set data with sessionStorage
        sessionStorage.setItem("fav_country", JSON.stringify(country))

    }

    getData() {
        let dataStorage = sessionStorage.getItem("fav_country");
        dataStorage = JSON.parse(dataStorage);
        console.log(dataStorage);
        return(
            dataStorage
        )
    }

    render(){
        return (
        <div>
        <div className="save_info">
            <input id="write_country" placeholder="Lagre ditt favoritt land midlertidig"/>
            <button onClick={ () => this.setDataSession(document.getElementById("write_country").value) }>Lagre favorittland (Session data)</button>
            <button onClick={ () => this.getData() }>Hent favorittland (Session Data)</button>
        </div>
        <div>
            <p>{ this.getData() } </p>
        </div>
        </div>
      );
    }
}

export default SessionStorage;
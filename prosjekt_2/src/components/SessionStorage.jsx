import React from "react";
//import Country_spec from "./Country_spec";

export class SessionStorage extends React.Component {

    constructor(){
        super();
        this.state = {country: ""};
    }

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
        this.setState({country: dataStorage});
    }

    handleClick() {
        this.setDataSession(document.getElementById("save_country").value)
        this.getData()
    }

    render(){
        return (
        <div>
        <div className="save_info">
            <input id="save_country" placeholder="Lagre ditt favoritt land midlertidig"/>
            <button onClick={ () => this.handleClick() }>Lagre favorittland (Session data)</button>
        </div>
        <div>
            <p>{ this.state.country } </p>
        </div>
        </div>
      );
    }
}

export default SessionStorage;
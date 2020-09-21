import React from "react";
//import Country_spec from "./Country_spec";

export class LocalStorage extends React.Component {

    constructor(){
        super();
        this.state = {country: ""};
    }

    setDataLocal(country){
               //set data with localstorage
      //  let obj = { name: "John", age: 12, email: "mymail@mail.no"}
        localStorage.setItem("fav_country", JSON.stringify(country));
    }

    getData() {
        let dataLocal = localStorage.getItem("fav_country");
        dataLocal = JSON.parse(dataLocal);
        console.log(dataLocal);
        this.setState({ country: dataLocal});
    }

    //denne funksjonen er innebygd i react (lifecycle methodes) og sørger for at funksjonen blir kjkørt med engang
    componentWillMount(){
        this.getData();
    }

    handleClick() {
        this.setDataLocal(document.getElementById("write_country").value) 
        this.getData()
    }


    render(){
        return (
        <div>
        <div className="save_info">
            <input id="write_country" placeholder="Lagre ditt favorittland til senere"/>
            <button onClick={ () => this.handleClick() }> Lagre favorittland (Local data)</button>
        </div>
        <div>
            <p>{ this.state.country } </p>
        </div>
        </div>
      );
    }
}

export default LocalStorage;

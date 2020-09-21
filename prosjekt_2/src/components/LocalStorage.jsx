import React from "react";
//import Country_spec from "./Country_spec";

export class LocalStorage extends React.Component {

    setDataLocal(country){
               //set data with localstorage
      //  let obj = { name: "John", age: 12, email: "mymail@mail.no"}
        localStorage.setItem("fav_country", JSON.stringify(country));
    }

    getData() {
        let dataLocal = localStorage.getItem("fav_country");
        dataLocal = JSON.parse(dataLocal);
        console.log(dataLocal);
        return(
            dataLocal
        )
    }


    render(){
        return (
        <div>
        <div className="save_info">
            <input id="write_country" placeholder="Lagre ditt favorittland til senere"/>
            <button onClick={ () => this.setDataLocal(document.getElementById("write_country").value) }> Lagre favorittland (Local data)</button>
            <button onClick={ () => this.getData() }>Hent favorittland (Local Data)</button>
        </div>
        <div>
            <p>{ this.getData() } </p>
        </div>
        </div>
      );
    }
}

export default LocalStorage;

import React from "react";
import Country_spec from "./Country_spec";

export class Web_storage extends React.Component {

    setData(){
        //set data with localstorage
        let obj = { name: "John", age: 12, email: "mymail@mail.no"}
        localStorage.setItem("myData", JSON.stringify(obj));

        //set data with sessionStorage
        sessionStorage.setItem("mySessionStorageData", JSON.stringify(obj))

    }

    getData() {
        let data = localStorage.getItem("myData");
        //let data = sessionStorage.getItem("myData");
        data = JSON.parse(data);
        console.log(data.email);
    }

    render(){
        return (

        <div className="save_info">
            <button onClick={ () => this.setData() }>Set Data</button>
            <button onClick={ () => this.getData() }>Get Data</button>
        </div>
      );
    }
}

export default Web_storage;

import React from "react";
//import Country_spec from "./Country_spec";

interface IProps{

}
interface sessionState{
    country?: string;
}

export class SessionStorage extends React.Component {

    constructor(props: IProps){
        super(props);
        this.state = {country: ""};
    }

    setDataSession(country:string){
 
       // let favCountry = Country_spec.getItem("Norway");
        console.log(country)
        //set data with sessionStorage
        sessionStorage.setItem("fav_country", country.toString())

    }


    getData() {
        var dataStorage = (Boolean(sessionStorage.getItem("fav_country")));
        this.setState({country: dataStorage});
    }

    handleClick() {
        var inputValue = (document.getElementById("save_country") as HTMLInputElement).value;
        this.setDataSession(inputValue);
        this.getData()
    }

    render(){
        return (
        <div  className="save_info">
            <div>
                <input id="save_country" placeholder="Lagre ditt favoritt dikt"/>
                <button onClick={ () => this.handleClick() }>Lagre favoritt dikt (Session data)</button>
            </div>
            <div className="sessionLagring">
                <p>Lagre favorittdikt: </p>
                <p>{ this.state.country } </p>
            </div>
        </div>
      );
    }
}

export default SessionStorage;
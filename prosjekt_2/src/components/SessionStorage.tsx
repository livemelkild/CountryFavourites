import React, {useEffect} from "react";
import Country_spec from "./Country_spec";

interface IProps{
}
interface sessionState{
    country?: string;
}

export class SessionStorage extends React.Component<IProps, sessionState> {
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
        var dataStorage = (String(sessionStorage.getItem("fav_country")));
        this.setState({country: dataStorage});
    }

    handleClick() {
        const poem_italy = "A Death blow is a Life blow to Some";
        const poem_norway = "When Memory is full";
        const poem_greece = "liss is the plaything of the child --";
        const poem_portugal = "Beauty crowds me till I die";
        const poem_england = "Too happy Time dissolves itself";
        const poem_germnay = "Of life to own --";
        const poem_france = "The Butterfly in honored Dust";
        const poem_spain = "No Autumn's intercepting Chill";
  
        var countries = ["norge", "italia", "portugal", "hellas", "england", "tyskland", "frankrike", "spania"]
        var poem_title =[poem_norway, poem_italy, poem_portugal, poem_greece, poem_england, poem_germnay, poem_france, poem_spain]



        var inputValue = (document.getElementById("save_country") as HTMLInputElement).value.toLowerCase();
        var i;
        for (i=0; i< countries.length; i++){
            if (countries.includes(inputValue)){
                if(countries[i] === inputValue){
                    this.setDataSession(poem_title[i]);
                    console.log(countries[i])
                    console.log(poem_title[i])
                    this.getData()
                    break;
                }
            } 
            else{
                this.setDataSession("Du må skrive inn et av landene over");
                this.getData()
            }
        }
        }
    
    useEffect(){
        this.getData();
    }

    render(){

        return (
        <div  className="save_info">
                <h4>Lagre ditt favorittdikt</h4>
                <input id="save_country" placeholder="Lagre ditt favoritt dikt"/>
                <button id="start_knapp" onClick={ () => this.handleClick() }>Få opp overskriften</button>
            <div className="sessionLagring">
                <p>Skriv inn navnet på det landet som har det beste diktet</p>
                <p>Tittelen til ditt favorittdikt: </p>
                <p><b><i>{ this.state.country } </i></b></p>
            </div>
        </div>
      );
    }
}

export default SessionStorage;
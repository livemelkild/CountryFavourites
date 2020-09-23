import React from "react"
import {Link} from "react-router-dom";
import Style from "./Start_page.css";

export class Start_page extends React.Component{
    render() {
        return(
            <div id="circle">
            <Link className = "start_link" to="/country">
                <br/>
                <img src={process.env.PUBLIC_URL + "/Image/arrow.svg"}></img>
                <div className="start_side"> 
                    Utforsk landene du kan reise til
                </div>
            </Link>
            </div>
        );
    }
}

export default Start_page;
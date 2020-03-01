import React from "react";
import "./index.css";

//Aesthetic Cards
class Card extends React.Component {
    render(){
        return(
            <div className = "card">
                <span className = "close" 
                onClick = {this.props.cardClicked} 
                cardtitles = {this.props.title} >
                    X
                </span>
                <br />
                <h3>{this.props.title}</h3> 
                <p>{this.props.content}</p>
            </div>
        );
    } 
} 

export default Card;
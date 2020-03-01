import React from "react";
import Card from "../Card/";
import data from "../../data.json";
//import is different for data.json


class CardList extends React.Component {

    constructor(props) {
      super(props);
      this.state = {cards: data.cards};
    }
  //error for cardTitles in console if it's not all lowercase
    cardsGone = (event) => {

      let cardtitles = event.target.getAttribute("cardtitles");

      let localCards = this.state.cards;

      let changedCards = localCards.filter((card) => {
        return card.title !== cardtitles;
        
      });
  
      this.setState({cards: changedCards});
    }
  
  render() {
    return(
      <div>
        {this.state.cards.map((card, index) => {
          return <Card 
              //Each card needs key in the index!
                key = {index}
                title = {card.title} 
                content = {card.content}
                cardClicked = {this.cardsGone} 
              />
              })
                
            }
            
        </div>
      );
    }
  }
  
  export default CardList;
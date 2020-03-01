import React from 'react';
import CardList from './components/CardList';

//render CardList in div, pull App className
class App extends React.Component {
  render() {
    return (
      <div>
      <CardList />
      </div>

    );
  }
}

/*
class App extends React.Component {

  render() {
    return (
      <body>
        <div>
          <Card content="This is a card!" />
          
          <Card content="This is another card! Woah so much content can fit here" />
          
          <Card content="Another 'Another card'" />
      
        </div>
        
    </body>
    
        
      );
    }
  }

  */
export default App;
import React from 'react';
import './App.css';
import Card from './components/Card';

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
export default App;


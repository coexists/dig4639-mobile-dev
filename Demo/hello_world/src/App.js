import React from 'react';
import logo from './logo.svg';
import './App.css';

function NameBadge(props) {
  console.log(props);
  return <p>My Name is {props.name}</p>
}
class App extends React.Component {
  clickHandler() {
    alert("Clicked");
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={() => alert("BORK BORK")}>
      <img src="https://i.imgur.com/CG2F2dt.jpg" className="App-logo" alt="logo" />
      </div>
        <p>
          OwO
        </p>
        <NameBadge name = "Hank" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;

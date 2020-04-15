import React from 'react';
const HEADERS ={
  "Method" : "GET",
  "headers" : {
    "API" : "leon",
    "Content-Type" : "application/json",
    "Accept": "application/json"
  }
}
class Remove extends React.Component {
  constructor(props) {
    super(props);
    this.inputData = React.createRef();
    this.state =this.state = {
      value: '',
    }
  }

  delete = () => {
    let newHeader = {...HEADERS,
      "method" : "POST",
      body: JSON.stringify({
        position:this.inputData.current.value,
      })}
      fetch("http://plato.mrl.ai:8080/contacts/remove", newHeader)
      .then((res) => res.json())
  }
  submitted = d => {
    d.preventDefault();
    this.delete()
  }
  render() {
    return (
      <div> 
        <h2>Remove From Contact List :C</h2>

        <form onSubmit={this.submitted}>
          <label>Type in Contact # to remove</label><br/>
          <input type="text" ref={this.inputData} id ="position" /><br/>
          <button type="submit" onClick={this.pageRefresh}>Submit</button>
          <br />
       </form>
    </div>
    );
  }
  pageRefresh() {
    window.location.reload();
  }
}

export default Remove;
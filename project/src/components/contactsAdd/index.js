import React from 'react';
const HEADERS ={
    "Method" : "GET",
    "headers" : {
      "API" : "leon",
      "Content-Type" : "application/json",
      "Accept": "application/json"
    }
  }

class ContactsAdd extends React.Component {

  constructor(props) {
    super(props);

    //set input reference 
    this.textInput = React.createRef();
    this.textInput2 = React.createRef();

    //track value of input state 
    this.state = {
      value: '',
      value2: ''
    }
  }


        //send header body 
      newVal= () => {
        let newHeaders = {...HEADERS,
          "method" : "POST",
          body: JSON.stringify({
            name: this.textInput.current.value,
            number:this.textInput2.current.value
          })}
          fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
          .then((res) => res.json())
          .then((data) => {
              this.setState({value:this.textInput.current.value})
              this.setState({value:this.textInput2.current.value})
              console.log(data)
        }
        , [])
      }

//on submit event prevent default and run function 
  handleSubmit = e => {
    e.preventDefault();
    this.newVal()
  }
  

  
  render() {

    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={this.handleSubmit}>
  
            <label htmlFor="name">Full Name</label><br/>
            <input type="text" ref={this.textInput} id ="name" /><br/>

            <label htmlFor="name">Number</label><br/>
            <input type="text" ref={this.textInput2} id ="number" /><br/>

            <button type="submit">Submit</button>
         </form>
      </div>
    );
  }
}

export default ContactsAdd;
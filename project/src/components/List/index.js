import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contacts: []};
  }

  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "leon"}})
    .then((res) => res.json())
    .then((data, ) => {
        console.log(data)
      this.setState({contacts: data.contacts});
    });
  }

  render() {
    return (
      <div> <h2 id="top">Contact List</h2>
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>Name:{value.name} <br />Phone Number: {value.number}</p>;
         })
       }
      </div>
    );
  }
}

export default List;
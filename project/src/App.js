import React from 'react';
import Profile from './components/Profile';
import ContactsAdd from './components/contactsAdd';
import ContactsList from './components/contactsList';
import ContactsRemove from './components/contactsRemove';
import './App.css';

class App extends React.Component{
  render(){
  return (
    <body>
      <div class="center">
        <div class="see">
          <div class="list">
          <ContactsList />
          <ContactsAdd />
          <Profile />
          <ContactsRemove />
          </div>
        </div>
      </div>
    </body>
  );
  }
}

export default App;

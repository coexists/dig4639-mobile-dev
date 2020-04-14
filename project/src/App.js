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
          </div>
          <div class="add">
          <ContactsAdd />
          </div>
          <div class="profile">
          <Profile />
          </div>
          <div class="remove">
          <ContactsRemove />
          </div>
        </div>
      </div>
    </body>
  );
  }
}

export default App;

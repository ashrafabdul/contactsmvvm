import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsFilterContainerView from "./views/ContactsFilterContainerView"

class App extends Component {
  render() {
    return (
      <div className="App">
      <ContactsFilterContainerView/>

      </div>
    );
  }
}

export default App;


/// Based on https://medium.cobeisfresh.com/level-up-your-react-architecture-with-mvvm-a471979e3f21
/// https://stackoverflow.com/questions/6248992/does-presenter-in-model-view-presenter-create-views
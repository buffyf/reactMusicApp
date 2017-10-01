import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import PlayList from "./components/PlayList";
import PlayListForm from "./components/PlayListForm";
import Landing from "./components/Landing";
import "./styles/App.css";
import "./styles/styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing />
        <PlayList />
        <PlayListForm />
      </div>
    );
  }
}



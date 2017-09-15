import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import PlayList from "./components/PlayList";
import PlayListForm from "./components/PlayListForm";
import "./styles/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm />
        <PlayList />
      </div>
    );
  }
}



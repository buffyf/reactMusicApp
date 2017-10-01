import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <div className="icon"></div>
                    <h1 className="intro-lead-in">Listifi</h1>
                </div>
            </nav>
        );
    }
}

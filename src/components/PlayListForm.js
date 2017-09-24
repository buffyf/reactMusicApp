import React, { Component } from 'react'

export default class PlayListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

            userName: '',
            songTitle: '',
            songArtist: '',
            songNotes: '',

        }
    }

    handleInputChange = e => {
        // get the property to update
        // get this.state.track
        // let prop = e.target.name;
        // let { track } = this.state;
        // update this.state.track
        // track[prop] = e.target.value;
        // set state
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addToList = (e) => {
        e.preventDefault();
        this.setState({ userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value });
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
            method: "POST",
            body: listItem,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ).then(response => {
            console.log(response, "yay");

        }).catch(err => {
            console.log(err, "boo!");
        });
        this.setState({ userName: '', songNotes: '', songArtist: '', songTitle: '' });
    }

    render() {
        let { userName, songArtist, songTitle, songNotes } = this.state;
        return (
            <section id="contact">
                <div id="suggest" className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Suggest a Song</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form onSubmit={this.addToList} id="contactForm" name="sentMessage" novalidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input className="form-control" id="name" name="userName" type="text" value={userName} placeholder="Username" onChange={this.handleInputChange} required data-validation-required-message="Please enter your username." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" id="email" name="songArtist" type="text" value={songArtist} placeholder="Artist or Band" onChange={this.handleInputChange} required data-validation-required-message="Please enter an artist or band name." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" id="phone" name="songTitle" type="text" value={songTitle} placeholder="Song Title" onChange={this.handleInputChange} required data-validation-required-message="Please enter a song title." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea className="form-control" id="message" name="songNotes" type="text" value={songNotes} placeholder="Notes" onChange={this.handleInputChange} required data-validation-required-message="Please enter notes."></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button id="sendMessageButton" class="btn btn-xl" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}



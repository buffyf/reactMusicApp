import React, { Component } from 'react'

export default class Landing extends Component {
    render() {
        return (
            <header className="masthead hero">
                <div className="container">
                    <div className="intro-text">
                        <a className="btn btn-xl js-scroll-trigger" href="#playlist">What's Popular?</a>
                        <a className="btn btn-xl js-scroll-trigger" href="#suggest">Suggest a Song</a>
                    </div>
                </div>
            </header>
        )
    }
}

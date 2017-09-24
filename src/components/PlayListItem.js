import React, { Component } from 'react'

export default class PlayListItem extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let songs;
        songs = this.props.songs.map((song, index) => {


            return (

                <div className="songList" key={index}>
                    <p><span className="songBox">User:&nbsp;&nbsp; </span>{song.userName}</p>
                    <p><span className="songBox">Artist or Band:&nbsp;&nbsp; </span>{song.songArtist}</p>
                    <p><span className="songBox">Title:&nbsp;&nbsp; </span>{song.songTitle}</p>
                    <p><span className="songBox">Notes:&nbsp;&nbsp; </span>{song.songNotes}</p>
                </div>

            )
        })
        return (
            <div className="songListContainer">
                {songs}
            </div>
        );
    }
}

import React,{Component} from 'react'

const NowPlaying = (props) =>
{
    return(
        <div id='song-container'>
            <div>
                <img src="" alt="image" />
                <p id="song-title">Forever Love</p>
                <p id="song-artist">Neha Srivastava</p>
            </div>
            <div id='bar'>
                <div id='Duration'></div>
                <span>0:00</span>
                <span>3:56</span>
            </div>
        </div>
    )
}
export default NowPlaying;
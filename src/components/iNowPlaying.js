import React,{Component} from 'react';
import '../css/nowplay.css';
import Song1 from '../static/song1.png';
export default class NowPlaying extends Component
{
    constructor(props)
    {
        super(props);
    }
    // function to go back when clicked on menubtn
    menubtn = () =>
    {
        const {screen,updateScreen} = this.props;
        if(screen===2)
        {
            updateScreen(1);
        }
    }
    componentDidMount = ()=>
    {
        var menubtn = document.getElementById('menu');
        menubtn.onclick = this.menubtn;
    }

    render()
    {
        return(
            <div id='song-container'>
                <div id='song-details'>
                    <div id="song-image-container">
                        <img src={Song1} alt="image" />
                    </div>
                    <div id="song-desc">
                        <p id="song-title">death bed</p>
                        <p id="song-artist">Paused</p>
                    </div>
                </div>
                <div id='bar'>
                    <div>0:40</div>
                    <div id="duration"></div>
                    <div>3:56</div>
                </div>
            </div> 
        )
    }
}
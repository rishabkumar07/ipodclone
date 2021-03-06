import React, { Component } from 'react';
import GamesImage from '../static/games1.jpg';

export default class Games extends Component
{
    constructor(props)
    {
        super(props);
    }
    menubtn = () =>
    {
        // const activeMenu = this.state.activeMenu;
        const {screen,updateScreen} = this.props;
        if(screen===5)
        {
            updateScreen(1);
        }

    }
    componentDidMount()
    {
        var menubtn = document.getElementById('menu');
        menubtn.onclick = this.menubtn;
    }
    render()
    {
        return(
            <div id="game-screen" style={{border:'2px solid black',margin:10,marginTop:'-10px',height:197,backgroundColor:'whitesmoke'}}>
                <img src={GamesImage} alt='games-image' style={{height:'100%',width:'100%'}} />
            </div>
        )
    }
    
}

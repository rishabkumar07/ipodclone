import React, { Component } from 'react';

export default class AllSongs extends Component
{
    constructor(props)
    {
        super(props);
    }
    // to go back to previous screen
    menubtn = () =>
    {
        // const activeMenu = this.state.activeMenu;
        const {screen,updateScreen} = this.props;
        if(screen===7)
        {
            updateScreen(3);
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
            <div id="all-screen" style={{border:'2px solid black',margin:10,marginTop:'-10px',height:197,backgroundColor:'whitesmoke'}}>
                <h1 style={{textAlign:"center",marginTop:'28%'}}>AllSongs</h1>
            </div>
        )
    }
}
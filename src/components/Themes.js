import React, { Component } from 'react'
import ZingTouch from 'zingtouch';
import '../css/themes.css';
export default class Themes extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            // defining states
            themeMenu:[
                {
                    id:0,
                    name:'Rose Gold',
                    className:'inactive'
                },
                {
                    id:1,
                    name:'Space Gray',
                    className:'inactive'
                },
                {
                    id:2,
                    name:'Light Purple',
                    className:'inactive'
                },
                {
                    id:3,
                    name:'Ravishing Red',
                    className:'inactive'
                }
            ],
            activeMenu:0
        }
    }
    // zingtouch logic for rotation based on activemenu
    wheelRotation = (e) => {
        if(e.detail.distanceFromOrigin<0)
        {
            e.detail.distanceFromOrigin *=-1;
            e.detail.distanceFromOrigin %= 120;
            if (e.detail.distanceFromOrigin > 0 && e.detail.distanceFromOrigin < 30) {
                this.setState({activeMenu: 3 })
            }
            else if (e.detail.distanceFromOrigin > 30 && e.detail.distanceFromOrigin < 60) {
                this.setState({ activeMenu: 2 })
            }
            else if (e.detail.distanceFromOrigin > 60 && e.detail.distanceFromOrigin < 90) {
                this.setState({ activeMenu: 1 })
            }
            else if (e.detail.distanceFromOrigin > 90 && e.detail.distanceFromOrigin < 120) {
                this.setState({ activeMenu: 0 })
            }
        }
        else{
            e.detail.distanceFromOrigin %= 120;
        
        
            if (e.detail.distanceFromOrigin > 0 && e.detail.distanceFromOrigin < 30) {
                this.setState({ activeMenu: 0 })
            }
            else if (e.detail.distanceFromOrigin > 30 && e.detail.distanceFromOrigin < 60) {
                this.setState({activeMenu: 1 })
            }
            else if (e.detail.distanceFromOrigin > 60 && e.detail.distanceFromOrigin < 90) {
                this.setState({ activeMenu: 2 })
            }
            else if (e.detail.distanceFromOrigin > 90 && e.detail.distanceFromOrigin < 120) {
                this.setState({ activeMenu: 3 })
            }
            }
    }
    // to go back to previous screen
    menubtn = () =>
    {
        // const activeMenu = this.state.activeMenu;
        const {screen,updateScreen} = this.props;
        if(screen===10)
        {
            updateScreen(6);
        }

    }

    componentDidMount = ()=>
    {
        const wheelRotation = this.wheelRotation
        var target = document.getElementsByClassName('wheel-container')[0];
        var region = new ZingTouch.Region(target);
        // binding the region where rotate property will be applied
        region.bind(target, 'rotate', function (e) {
            wheelRotation(e);
        });
        var menubtn = document.getElementById('menu');
        menubtn.onclick = this.menubtn;
        var ipod = document.getElementsByClassName('case')[0];
        var menuClick  = document.getElementById('wheel');
        
        // to change color of the ipod dynamically based on the options choosed
        menuClick.onclick = ()=>
        {
            const activeMenu = this.state.activeMenu;
            const {screen} = this.props;
             
            if(screen===10 && activeMenu===0)
            {
                ipod.style.backgroundColor = '#fddcd7';
            }
            if(screen===10 && activeMenu===1)
            {
                ipod.style.backgroundColor = 'rgb(210,210,210)';
            }
            if(screen===10 && activeMenu===2)
            {
                ipod.style.backgroundColor = '#d1cdda';
            }
            if(screen===10 && activeMenu===3)
            {
                ipod.style.backgroundColor = '#ff0000';
            }

        }
    }

    render()
    {
        const {activeMenu,themeMenu} = this.state;
        return(
            <div id='theme-screen'>
                <h3>Themes</h3>
                <div id="theme-menu">
               <ul>
                    {themeMenu.map(item => {
                        return (
                            <div key={item.id}>
                                <li className={(item.id === activeMenu ? item.className = "active" : item.className = "inactive") }>
                                        {item.name}
                                </li>
                                
                            </div>
                        );
                    })}
                    </ul>
                </div>
            </div>
        )
    }
      


}
import React, { Component } from 'react'
import ZingTouch from 'zingtouch';
import '../css/themes.css';
export default class WheelColor extends Component{
    constructor(props)
    {
        super(props);
        // defining the required states
        this.state = {
            wheelMenu:[
                {
                    id:0,
                    name:'Moonlit',
                    className:'inactive'
                },
                {
                    id:1,
                    name:'White',
                    className:'inactive'
                },
                {
                    id:2,
                    name:'Blue',
                    className:'inactive'
                },
                {
                    id:3,
                    name:'Red',
                    className:'inactive'
                },
            ],
            activeMenu:0
        }
    }

    // zingtouch logic for wheel rotation
    wheelRotation = (e) => {
        // for rotating backwards
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
        // for forward rotation
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
    // to go back
    menubtn = () =>
    {
        // const activeMenu = this.state.activeMenu;
        const {screen,updateScreen} = this.props;
        if(screen===11)
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
        var menuClick  = document.getElementById('wheel');

        // for changing color of the wheel dynamically based on options choosed
        menuClick.onclick = ()=>
        {
            const activeMenu = this.state.activeMenu;
            const {screen} = this.props;
             
            if(screen===11 && activeMenu===0)
            {
                target.style.backgroundColor = '#2C5364';
            }
            if(screen===11 && activeMenu===1)
            {
                target.style.backgroundColor = 'whitesmoke';
            }
            if(screen===11 && activeMenu===2)
            {
                target.style.backgroundColor = '#1CB5E0';
            }
            if(screen===11 && activeMenu===3)
            {
                target.style.backgroundColor = '#c31432';
            }

        }
    }

    render()
    {
        const {activeMenu,wheelMenu} = this.state;
        return(
            <div id='theme-screen'>
                <h3>Wheel Color</h3>
                <div id="theme-menu">
               <ul>
                    {wheelMenu.map(item => {
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
import React, { Component } from 'react'
import ZingTouch from 'zingtouch';
import '../css/settings.css';
export default class Settings extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            // defining states required
            settingMenu:[
                {
                    id:0,
                    name:'Themes',
                    className:'inactive'
                },
                {
                    id:1,
                    name:'WheelColor',
                    className:'inactive'
                }
            ],
            activeMenu:0
        }
    }
    // to update screen based on selected activemenu
    menuClick = () =>
    {
        const activeMenu = this.state.activeMenu;
        const {screen,updateScreen} = this.props;

        if(screen ===6 && activeMenu===0)
        {
            updateScreen(10);
        }
        if(screen ===6 && activeMenu===1)
        {
            updateScreen(11);
        }

    }

    // zing touch logic for rotation
    wheelRotation = (e) => {
        // for backward rotation
        if(e.detail.distanceFromOrigin<0)
        {
            e.detail.distanceFromOrigin *=-1;
            e.detail.distanceFromOrigin %= 60;
            if (e.detail.distanceFromOrigin > 0 && e.detail.distanceFromOrigin < 30) {
                this.setState({activeMenu: 1 })
            }
            else if (e.detail.distanceFromOrigin > 30 && e.detail.distanceFromOrigin < 60) {
                this.setState({ activeMenu: 0 })
            }
        }
        // for forward rotation
        else{
            e.detail.distanceFromOrigin %= 60;
        
        
            if (e.detail.distanceFromOrigin > 0 && e.detail.distanceFromOrigin < 30) {
                this.setState({ activeMenu: 0 })
            }
            else if (e.detail.distanceFromOrigin > 30 && e.detail.distanceFromOrigin < 60) {
                this.setState({activeMenu: 1 })
            }
            }
    }
    // to go back to previous screen on clicking menu btn
    menubtn = () =>
    {
        // const activeMenu = this.state.activeMenu;
        const {screen,updateScreen} = this.props;
        if(screen===6)
        {
            updateScreen(1);
        }

    }
    componentDidMount() {
        const wheelRotation = this.wheelRotation
        var target = document.getElementsByClassName('wheel-container')[0];
        var menuClick  = document.getElementById('wheel');
        menuClick.onclick = this.menuClick; 
        var region = new ZingTouch.Region(target);
        // binding the region where rotate property will be applied
        region.bind(target, 'rotate', function (e) {
            wheelRotation(e);
        });
        var menubtn = document.getElementById('menu');
        menubtn.onclick = this.menubtn;
    }
    render()
    {
        const {activeMenu,settingMenu} = this.state;
        return(
            <div id="setting-screen">
               <h3>Settings</h3>
               <div id="setting-menu">
               <ul>
                    {settingMenu.map(item => {
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

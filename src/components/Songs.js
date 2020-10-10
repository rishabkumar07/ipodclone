import React, { Component } from 'react';
import ZingTouch from 'zingtouch';
import '../css/songs.css';
export default class Songs extends Component{
    constructor(props)
    {
        super(props);
        // defining the required states
        this.state=
        {
            songMenu:[
                {
                    id: 0,
                    name: "All Songs",
                    className: "inactive"
                },
                {
                    id: 1,
                    name: "Artists",
                    className: "inactive"
                },
                {
                    id: 2,
                    name: "Albums",
                    className: "inactive"
                }
    
            ],
            activeMenu: 0
        }
    }

    // function to update screen based on activemenu
    menuClick = () =>
    {
        const activeMenu = this.state.activeMenu;
        const {updateScreen,screen} = this.props;

        if (screen === 3 && activeMenu === 0 ) {
            updateScreen(7)
        }
        if (screen === 3 && activeMenu === 1  ) {
            updateScreen(8)
        }
        if (screen === 3  && activeMenu === 2) {
            updateScreen(9)
        }
    }
    // logic to change activemenu on wheel rotation
    wheelRotation = (e) => {
        if(e.detail.distanceFromOrigin<0)
        {
            e.detail.distanceFromOrigin *=-1;
            e.detail.distanceFromOrigin %= 90;
            if (e.detail.distanceFromOrigin > 0 && e.detail.distanceFromOrigin < 30) {
                this.setState({ activeMenu: 2 })
            }
            else if (e.detail.distanceFromOrigin > 30 && e.detail.distanceFromOrigin < 60) {
                this.setState({ activeMenu: 1 })
            }
            else if (e.detail.distanceFromOrigin > 60 && e.detail.distanceFromOrigin < 90) {
                this.setState({ activeMenu: 0 })
            }
        }
        else{
            e.detail.distanceFromOrigin %= 90;
        
        
            if (e.detail.distanceFromOrigin > 0 && e.detail.distanceFromOrigin < 30) {
                this.setState({ activeMenu: 0 })
            }
            else if (e.detail.distanceFromOrigin > 30 && e.detail.distanceFromOrigin < 60) {
                this.setState({ activeMenu: 1 })
            }
            else if (e.detail.distanceFromOrigin > 60 && e.detail.distanceFromOrigin < 90) {
                this.setState({ activeMenu: 2 })
            }
        }


    }
    // to go back on clicking menubtn
    menubtn = () =>
    {
        // const activeMenu = this.state.activeMenu;
        const {screen,updateScreen} = this.props;
        if(screen===3)
        {
            updateScreen(1);
        }

    }
    componentDidMount() {
        const wheelRotation = this.wheelRotation
        var target = document.getElementsByClassName('wheel-container')[0];
        var menuClick  = document.getElementById('wheel');
        menuClick.onclick = this.menuClick 
        var menubtn = document.getElementById('menu');
        menubtn.onclick = this.menubtn;
        var region = new ZingTouch.Region(target);
        // binding the region where rotate property will be applied
        region.bind(target, 'rotate', function (e) {
            wheelRotation(e);
        });
    }
    render() {
        const { activeMenu, songMenu } = this.state;
        return (
            <div id="song-screen">
                <h3>Songs</h3>
                <div id="song-menu">
                <ul>
                    {/* to change class to active or inactive based on current active menu */}
                    {songMenu.map(item => {
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
            </div>)
    }  

} 
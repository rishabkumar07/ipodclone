import React,{Component} from 'react';
import ZingTouch from 'zingtouch';
import '../css/screen.css';
import NowPlayingImage from '../static/coldplay.jpeg';
import Songs from '../static/songshd.jpg';
import Camera from '../static/camera2.jpg';
import Games from '../static/games3.jpg';
import Settings from '../static/settings3.jpg'

export default class Screen extends Component {
    constructor(props)
    {
        super(props);
        // defining the states
        this.state = {
            screenMenu:[
                {
                    id:1,
                    name:"iNow Playing",
                    className:"inactive"
                },
                {
                    id:2,
                    name:"Songs",
                    className:"inactive"
                },
                {
                    id:3,
                    name:"Camera",
                    className:"inactive"
                },
                {
                    id:4,
                    name:"Games",
                    className:"inactive"
                },
                {
                    id:5,
                    name:"Settings",
                    className:"inactive"
                },
            ],
            activeMenu:1
        }
    }

    // method to update screen based on current activeMenu
    menuClick = () => {
        const activeMenu = this.state.activeMenu;
        const {screen,updateScreen} = this.props;

        if(screen===1 && activeMenu===1)
        {
            updateScreen(2);
        }
        if(screen===1 && activeMenu===2)
        {
            updateScreen(3);
        }
        if(screen===1 && activeMenu===3)
        {
            updateScreen(4);
        }
        if(screen===1 && activeMenu===4)
        {
            updateScreen(5);
        }
        if(screen===1 && activeMenu===5)
        {
            updateScreen(6);
        }

    }

    // to change active item on wheel rotation
    wheelRotation = (e) =>
    {
        // for backward rotation
        if(e.detail.distanceFromOrigin<0)
        {
            e.detail.distanceFromOrigin *=-1;
            e.detail.distanceFromOrigin %= 150;
            if (e.detail.distanceFromOrigin > 0 && e.detail.distanceFromOrigin < 30) {
                this.setState({ activeMenu: 5 })
            }
            else if (e.detail.distanceFromOrigin > 30 && e.detail.distanceFromOrigin < 60) {
                this.setState({ activeMenu: 4 })
            }
            else if (e.detail.distanceFromOrigin > 60 && e.detail.distanceFromOrigin < 90) {
                this.setState({ activeMenu: 3 })
            }
            else if (e.detail.distanceFromOrigin > 90 && e.detail.distanceFromOrigin < 120) {
                this.setState({ activeMenu: 2 })
            }
            else if (e.detail.distanceFromOrigin > 120 && e.detail.distanceFromOrigin < 150) {
                this.setState({ activeMenu: 1 })
            }
        }
        // for forward rotation
        else{
            e.detail.distanceFromOrigin %= 150;
        
        
            if (e.detail.distanceFromOrigin > 0 && e.detail.distanceFromOrigin < 30) {
                this.setState({ activeMenu: 1 })
            }
            else if (e.detail.distanceFromOrigin > 30 && e.detail.distanceFromOrigin < 60) {
                this.setState({ activeMenu: 2 })
            }
            else if (e.detail.distanceFromOrigin > 60 && e.detail.distanceFromOrigin < 90) {
                this.setState({ activeMenu: 3 })
            }
            else if (e.detail.distanceFromOrigin > 90 && e.detail.distanceFromOrigin < 120) {
                this.setState({ activeMenu: 4 })
            }
            else if (e.detail.distanceFromOrigin > 120 && e.detail.distanceFromOrigin < 150) {
                this.setState({ activeMenu: 5 })
            }
        }
    }
    // menubutton click logic
    menubtn = () =>
    {
        // const activeMenu = this.state.activeMenu;
        const {screen,updateScreen} = this.props;
        if(screen===1)
        {
            updateScreen(0);
        }

    }
    componentDidMount() {
        const wheelRotation = this.wheelRotation
        var target = document.getElementsByClassName('wheel-container')[0];
        var menuClick  = document.getElementById('wheel');
        menuClick.onclick = this.menuClick 
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
    const {activeMenu,screenMenu} = this.state;
    return(
        <div id="screen">
            <div id="main">
                <div id="left-block">
                    <ul>
                        {/* to change classname to active or inactive based on the activemenu */}
                    {screenMenu.map(item => {
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
                {/* changing images based on activeMenu */}
                <div id="right-block">
                    {activeMenu === 1 && <img src={NowPlayingImage} alt='image' id='scimg' />}
                    {activeMenu === 2 && <img src={Songs} alt='image' id='scimg' />}
                    {activeMenu === 3 && <img src={Camera} alt='image' id='scimg' />}
                    {activeMenu === 4 && <img src={Games} alt='image' id='scimg' />}
                    {activeMenu === 5 && <img src={Settings} alt='image' id='scimg' />}
                </div>
 
            </div>
        
        
        </div>

    );
}


}

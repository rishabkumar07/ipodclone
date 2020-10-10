import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import Image from '../static/wallpaper1.jpg';
import '../css/lockscreen.css';

export default class LockScreen extends Component {
    // to go to the main screen
    mainMenu = () =>
    {
        const {updateScreen} = this.props
        updateScreen(1)
    }
    componentDidMount()
    {
        const wheel = document.getElementById('wheel');
        wheel.onclick = this.mainMenu;
    }

    render(){
        return(
            <div id="lock">
                <div id='image-container'>
                    <img src={Image} alt="lock"  />
                    <FontAwesomeIcon icon={faLock} id="lock-icon" />
                </div>
                <div id="text">
                    <p>Press center button to unlock!</p>
                </div>
                
            </div>
        )
    }
}
import React from 'react';
import ZingTouch from 'zingtouch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFastForward,faPlay,faPause,faFastBackward} from '@fortawesome/free-solid-svg-icons'
import '../css/wheel.css'

class Wheel extends React.Component {

    // binding region to zingtouch
    componentDidMount()
    {
        const touchArea = document.getElementsByClassName('wheel-container');
        const wheel = touchArea[0];
        const myRegion = new ZingTouch.Region(wheel);
        myRegion.bind(wheel,'rotate',function(e)
        {
            console.log(e.detail);
        })
    }
    render()
    {
        return (
            <div className="outer">
                <div className="wheel-container">
                    <div id="wheel"></div>
                    <div id="menu">MENU</div>
                    <div id="forward">
                        <FontAwesomeIcon icon={faFastForward}  />
                    </div>
                    <div id="play-pause">
                        <FontAwesomeIcon icon={faPlay}  />
                        <FontAwesomeIcon icon={faPause} />
                    
                    </div>
                    <div id="backward">
                        <FontAwesomeIcon icon={faFastBackward} />
                    </div>
                </div>
            </div>
           
          );
    }
  
}


   







export default Wheel;
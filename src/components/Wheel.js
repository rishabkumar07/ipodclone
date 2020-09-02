import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faFastForward,faPlay,faPause,faFastBackward} from '@fortawesome/free-solid-svg-icons'
import '../css/wheel.css'
class Wheel extends React.Component {
    render()
    {
        return (
            <div className="outer">
                <div className="wheel-container">
                    <div className="wheel"></div>
                    <div id="menu">MENU</div>
                    <div id="forward">
                        <FontAwesomeIcon icon={faFastForward}  border className=""/>
                    </div>
                    <div id="play-pause">
                        <FontAwesomeIcon icon={faPlay} border />
                        <FontAwesomeIcon icon={faPause} border/>
                    
                    </div>
                    <div id="backward">
                        <FontAwesomeIcon icon={faFastBackward} border/>
                    </div>
                </div>
            </div>
           
          );
    }
  
}

export default Wheel;
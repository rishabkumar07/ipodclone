import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBatteryFull,faHeadphones,faWifi} from '@fortawesome/free-solid-svg-icons';
import '../css/screen.css'

export default class Nabvar extends Component{
    constructor(props)
    {
        super(props);
        // defining state
        this.state = {
            currTime:null
        }
    }
    // logic to display current time
    componentDidMount()
    {
        setInterval(()=>{
            const date = new Date();
            var hours = date.getHours();
            var mins = date.getMinutes();
            if(hours<10 )
            {
                hours = '0'+hours;
            }
            if(mins<10)
            {
                mins = '0'+mins;
            }
            
            this.setState({
                currTime: hours+':'+mins, 
            })
        },1000)
    }
    render()
    {
        return(
            <div id="screen">
                <div  id="nav">
                    <div id="wifi">
                        <h3>iPod</h3>
                        <FontAwesomeIcon icon={faWifi} id="wifi-icon" />
                    </div>
                
                    <div id="time">
                    <h3>{this.state.currTime}</h3>
                    </div>
                
                    <div id="battery">
                        <FontAwesomeIcon icon={faHeadphones} id="headphone-icon" className="screen-icon" />
                        <FontAwesomeIcon icon={faBatteryFull} id="battery-icon" className="screen-icon" />
                    </div>
                </div>
            </div>
        )
    }
}
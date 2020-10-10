import React,{Component} from "react";
import Webcam from "react-webcam";
import '../css/camera.css'
class WebcamComponent extends Component
{ 
    constructor(props)
    {
        super(props);
    }
    // to go back on previous screen
    menubtn = () =>
    {
        // const activeMenu = this.state.activeMenu;
        const {screen,updateScreen} = this.props;
        if(screen===4)
        {
            updateScreen(1);
        }

    }
    componentDidMount()
    {
        var menubtn = document.getElementById('menu');
        menubtn.onclick = this.menubtn;
    }
    render(){
    return(
         <div id="cam-screen" >
             {/* webcam component */}
            <Webcam 
            height={'100%'}
            width={'100%'} />
         </div>
        )
    }
}    
export default WebcamComponent;

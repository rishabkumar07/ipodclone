import React, {Component} from 'react'


export default class LockScreen extends Component {
    mainMenu = () =>
    {
        console.log('hey');
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
                <img src="" alt="lock" />
                <div id="text">
                <h3>Press Center Button to unlock!</h3>
                </div>
            </div>
        )
    }
}
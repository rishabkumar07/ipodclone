import React,{Component} from 'react';
import '../css/app.css';
import LockScreen from './LockScreen';
import Screen from './Screen';
import NowPlaying from './iNowPlaying';
import Games from './Games';
import Songs from './Songs';
import Wheel from './Wheel';

export default class App extends Component  {
  constructor(props)
  {
    super(props);
    this.state={
      screen:0
    }

  }
  updateScreen = (screen) =>{
    this.setState({screen})
  }
  render()
  {
    const {screen} = this.state
    return (
      <div className="app">
        <div className="case">
          {screen ===0 && <LockScreen screen={screen} updateScreen={this.updateScreen}  />}
          {screen ===1 && <Screen screen={screen} updateScreen={this.updateScreen}  />}
          {screen ===2 && <NowPlaying screen={screen} />}
          {screen ===3 && <Songs screen={screen} updateScreen={this.updateScreen} />}
          {screen ===4 && <Games screen={screen} />}
          {/* {screen ===5 && < />} */}
          <Wheel />
        </div>
      </div>
    )
    } 
}
 
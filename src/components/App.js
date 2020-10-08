import React,{Component} from 'react';
import '../css/app.css';
import Navbar from './Navbar'
import LockScreen from './LockScreen';
import Screen from './Screen';
import NowPlaying from './iNowPlaying';
import Songs from './Songs';
import Camera from './Camera';
import Games from './Games';
import Settings from './Settings';
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
          <Navbar />
          {screen ===0 && <LockScreen screen={screen} updateScreen={this.updateScreen}  />}
          {screen ===1 && <Screen screen={screen} updateScreen={this.updateScreen}  />}
          {screen ===2 && <NowPlaying screen={screen} updateScreen={this.updateScreen} />}
          {screen ===3 && <Songs screen={screen} updateScreen={this.updateScreen} />}
          {screen ===4 && <Camera screen={screen} updateScreen={this.updateScreen}  />}
          {screen ===5 && <Games screen={screen} updateScreen={this.updateScreen}  />}
          {screen ===6 && <Settings screen={screen} updateScreen={this.updateScreen} />}
          <Wheel />
        </div>
      </div>
    )
    } 
}
 
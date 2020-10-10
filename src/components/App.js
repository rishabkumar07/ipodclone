import React,{Component} from 'react';
import '../css/app.css';
import Navbar from './Navbar'
import LockScreen from './LockScreen';
import Screen from './Screen';
import NowPlaying from './iNowPlaying';
import Songs from './Songs';
import AllSongs from './AllSongs';
import Artists from './Artists';
import Albums from './Albums';
import Camera from './Camera';
import Games from './Games';
import Settings from './Settings';
import Themes from './Themes';
import WheelColor from './WheelColor';
import Wheel from './Wheel';

// class based component
export default class App extends Component  {
  constructor(props)
  {
    super(props);
    this.state={
      screen:0
    }

  }
  // to update the  current screen
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
          {/* component will be rendered based on the screen number */}
          {screen ===0 && <LockScreen screen={screen} updateScreen={this.updateScreen}  />}
          {screen ===1 && <Screen screen={screen} updateScreen={this.updateScreen}  />}
          {screen ===2 && <NowPlaying screen={screen} updateScreen={this.updateScreen} />}
          {screen ===3 && <Songs screen={screen} updateScreen={this.updateScreen} />}
          {screen ===4 && <Camera screen={screen} updateScreen={this.updateScreen}  />}
          {screen ===5 && <Games screen={screen} updateScreen={this.updateScreen}  />}
          {screen ===6 && <Settings screen={screen} updateScreen={this.updateScreen} />}
          {screen ===7 && <AllSongs screen={screen} updateScreen={this.updateScreen} />}
          {screen ===8 && <Artists screen={screen} updateScreen={this.updateScreen} />}
          {screen ===9 && <Albums screen={screen} updateScreen={this.updateScreen} />}
          {screen ===10 && <Themes screen={screen} updateScreen={this.updateScreen} />}
          {screen ===11 && <WheelColor screen={screen} updateScreen={this.updateScreen} />}
          <Wheel />
        </div>
      </div>
    )
    } 
}
 
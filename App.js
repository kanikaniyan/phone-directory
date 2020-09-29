import React, {Component} from 'react';
import Header from './Header';
import Password from './Password';
import ProgressBar from './ProgressBar';
import StrengthCriteria from './StrengthCriteria';
import './index';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      
      <Header/>
      <Password/> <br/>
      <ProgressBar value={0} max={100}/>
      <StrengthCriteria/>
      </div>
    )
  }
}
export default App;

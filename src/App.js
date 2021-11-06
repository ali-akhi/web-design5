import {Component} from 'react';
import React from 'react';
import reactDom from 'react-dom';
import './App.css';
import Button from './components/Button';
import Slider from './components/Slider';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    bpm: 100,
    playing: false,
    count: 0,
    }
    this.click1 = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");
    this.click2 = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");
    this.handleBPM = this.handleBPM.bind(this);
    this.updateInterval = this.updateInterval.bind(this);
    this.startStop = this.startStop.bind(this);
    this.playClick = this.playClick.bind(this);
  }

  updateInterval() {
    const bmpSpeed = 60 * 1000 / this.state.bpm;
    this.timer = setInterval(this.playClick, bmpSpeed);
  }

  handleBPM(event) {
    const bpm = event.target.value;
    if (this.state.playing) {
        clearInterval(this.timer);
        this.updateInterval();
        this.setState({
            count: 0,
            bpm
        });
    } else {
        this.setState({
            bpm
        });
    };
  }

  playClick() {
    if (this.state.count === 0) this.click2.play();
    else this.click1.play();
    this.setState({
        count: this.state.count + 1
    });
  }

  startStop() {
    if (this.state.playing) {
        clearInterval(this.timer);
        this.setState({
            playing: false
        });
    } else {
        this.updateInterval();
        this.setState({
            count: 0,
            playing: true
        }, this.playClick)
    }
  }

  render = () =>{
    return (
      <div className="App">
          <header className="App-header">
              <div>
              <h1>مترونوم</h1>
              <Slider bpm={this.state.bpm} handleChange={this.handleBPM}/>
              <Button handleClick={this.startStop} currentState={this.state.playing}/>
              </div>
          </header>
      </div>
    );
  } 
}
export default App;

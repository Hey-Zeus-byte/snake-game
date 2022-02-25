import React, {Component} from 'react';
import Snake from './Snake';
import Food from './Food';
import './index.css';

const getRandomCoords = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return (x,y)
}

class App extends Component {
  state = {
    food: getRandomCoords(),
    direction: 'RIGHT',
    snakeDots: [
      [0,0],
      [2,0]
    ]
  }

  componentDidMount() {
    document.onkeydown = this.onKeyDown;
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
      case 40:
        this.setState({direction: 'DOWN'});
      case 37:
        this.setState({direction: 'LEFT'});
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
    }
  }

  moveSnake = () +=>

  render() {
  return (
    <div className='game-area'>
      <Snake snakeDots={this.state.snakeDots}/>
      <Food dot={this.state.food}/>
    </div>
  )
}}

export default App;

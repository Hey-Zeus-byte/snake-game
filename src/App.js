import './index.css';

const App = () => {
  state = {
    snakeDots: [
      [0,0],
      [0,2]
    ]
  }
  return (
    <div className='game-area'>
      <div className='snake-dot' style={{top:0, left:0}}></div>
      <div className='snake-dot' style={{top:0, left:"2%"}}></div>
      <div className='snake-dot' style={{top:0, left:"4%"}}></div>
    </div>
  )
}

export default App;

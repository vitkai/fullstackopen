import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age
  return(
    <div>
    <p>Hello {name}. Your age is {age}.</p>
    <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

function App(props) {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({ ...clicks, left: clicks.left + 1 })
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({ ...clicks, right: clicks.right + 1 })
  }

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  const Display = ({ counter }) => <div>{counter}</div>

  const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
  
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  const friends = [ 'Peter', 'Maya']
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      </header>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name='Diana' age={26 + 10} />
      <div>
        <p>Friends: {friends[0]}, {friends[1]}</p>
      </div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
        <p>{allClicks.join(' ')}</p>
      </div>
    </div>
  );
}

export default App;

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

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Display = ({ counter, total }) => {
  return(
    <div>
      <p>Counter: {counter}</p>
      <p>Total: {total}</p>
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
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({ ...clicks, left: clicks.left + 1 })
    setTotal(total + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({ ...clicks, right: clicks.right + 1 })
    setTotal(total + 1)
  }

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setAll(allClicks.concat('+'))
    setCounter(counter + 1)
    setTotal(total + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setAll(allClicks.concat('-'))
    setCounter(counter - 1)
    setTotal(total + 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setAll(allClicks.concat('0'))
    setCounter(0)
    setTotal(total + 1)
  }

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
      <Display counter={counter} total={total} />
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={setToZero} text='zero' />     
      <Button handleClick={decreaseByOne} text='minus' />
      <div>
        {clicks.left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {clicks.right}
      </div>
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;

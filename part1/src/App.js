import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return(
    <div>
    <p>Hello {props.name}. Your age is {props.age}.</p>
    <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

function App() {
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
    </div>
  );
}

export default App;

import logo from './tf2.png';
import './App.css';
import Game from './game.js';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const secondApp = () => {
    return (
      <div>
      <h1>The other Functions of React</h1>
      </div>
    );
  }
  let text = () => {
    return (
      <div className='elDiv'>
        <p>Stuff that won't appear.</p>
        <p>This function get's overriten later in code</p>
      </div>
    )
  }
  text = () => {
    return (
      <div className='elDiv'>
        <p>The content is different,</p>
        <p>Previous function got overriten.</p>
        <p>Quite interesting, isn't it?</p>
      </div>
    )
  }
  let cook = true;
  const add = (a, b, event) => {
    alert(a+b);

    console.log(event);
  }
  const showList = () => {
    let list = ['Subaru', 'Volvo', 'Honda', 'Toyota', 'Hyundai', 'Lamborghini', 'Ferrari'];
    const CarList = list.map((element) => 
    <li>{element}</li>
    );
    return(
      <div>
      <ol>
        {CarList}
      </ol>
      </div>
    );
  }

  const food = ['pizza', 'apple', 'fries', 'hamburger'];

  const loopedArray = food.map((product) =>
    <li onClick={() => foodName(product)}>{product}</li>
  );

  const foodName = (foodname) => {
    alert(foodname);
  }

  const getData = () => {
    axios
    .get('http://bit.ly/2mTM3nY')
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
  }

  let [sum, changeSum] = useState(0);
  
  const setSum = (num) => {
    changeSum(num);
  }

  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="TF2 logo" />
        <p>
          Team Fortress 2. The class based, team shooter.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube link
        </a>
      </header>
    </div>
    {secondApp()}
    {showList()}
    {text()}
    <button onClick={event => add(2, 2, event)}>Click me!</button>
    <Game type="Shooter" class="Scout" weapon="Scattergun"/><br></br><br></br>
    {cook? <div>I am a good cook</div> : <div> I need to cook</div>}
    <br></br>
    <p>Foods:</p>
    <ul>
      {loopedArray}
    </ul>
    <div>
      <h2>Total: {sum}</h2>
      <button onClick={() => setSum(sum+1)}>Change Total up</button>
      <button onClick={() => setSum(sum-1)}>Change Total down</button>
    </div>
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  </div>
  );
}

export default App;

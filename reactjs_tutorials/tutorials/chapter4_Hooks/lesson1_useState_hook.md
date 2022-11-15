#### Demo 1: When click button increase, reupdate number on page

``````
function App() {
  const [counter, setCounter] = useState(1);

  function myCallback(preState) {
    return preState + 1;
  }

  const handleIncrease = function () {
    setCounter(myCallback)
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
``````

#### Demo 2: When click button update, reupdate information on page
`````
doing...
`````

#### Demo 3:
`````
import { useState } from 'react'

const gifts = [
  "CPU i9",
  "RAM 32GB RGB",
  "RGB Keyboard",
]

function App() {
  const [gift, setGift] = useState("Chưa có phần thưởng")

  const randomGift = function () {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  }

  return (
    <div style={{ padding: 32, display: 'block', textAlign: 'center' }}>
      <h1>{gift}</h1>
      <button
        onClick={randomGift}
        style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 3, paddingBottom: 3, fontSize: 16 }}>
        Lấy thưởng
      </button>
    </div>
  )
}

export default App;

`````
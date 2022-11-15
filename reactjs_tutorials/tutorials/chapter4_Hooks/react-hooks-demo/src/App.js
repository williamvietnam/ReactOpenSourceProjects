import EffectHookDemo from "./hooks-demo/EffectHookDemo";
import { useState } from "react"

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{padding: 32}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <EffectHookDemo />}
    </div>
  )
}

export default App;

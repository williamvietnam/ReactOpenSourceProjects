##### useReducer chức năng gần giống useState nhưng nó mạnh hơn rất nhiều, đều dùng để làm việc với state của component
#### Ôn lại các bước thực hiện useState: (VD: Tạo 2 button Tăng/Giảm một giá trị và hiển thị lên màn hình)
1. Init state: 0
2. Actions: Up (state + 1) / Down (state - 1)

#### useReducer
1. Init state: 0
2. Actions: Up (state + 1) / Down (state - 1)
3. Reducer
4. Dispatch

### Demo 1: Thực hiện lại vd trên lý thuyết 
```
import { useReducer } from 'react';

// init state
const initState = 0;

// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action');
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div style={{ padding: 32 }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  )
}

export default App;
```

### Demo 2: TodoApp with useReducer hook
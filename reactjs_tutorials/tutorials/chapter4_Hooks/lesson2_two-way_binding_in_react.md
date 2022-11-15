#### Demo 1
```
import { useState } from 'react'

// Suppose this is response from API
const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'React'
  }
]

function App() {
  const [checked, setChecked] = useState([]);

  const handleCheck = function (id) {
    setChecked(function (prev) {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(function(item){
          return item!==id
        })
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = function () {
    // Call API
    console.log({ ids: checked })
  }

  return (
    <div style={{ padding: 32 }}>
      {courses.map(item => (
        <div key={item.id}>
          <input
            type="checkbox"
            style={{ marginRight: 8 }}
            checked={checked.includes(item.id)}
            onChange={function () { handleCheck(item.id) }} />
          {item.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App;

```
#### Demo 1: Checkbox with useState
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

<br>______________________________________________________________________________________________________________</br>

#### Demo 2: Todolist with useState

```
import { useState } from 'react';

function App() {
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleDeleteItem = function(_index){
    console.log(_index)
    setJobs(function(prevState){
      return prevState.filter(function(value, index){
        return index !== _index;
      })
    })
  }

  const handleAddItem = function () {
    setJobs(function (prevState) {
      return [...prevState, job]
    })
    setJob('');

    console.log(jobs);
  }

  return (
    <div style={{ padding: 32 }}>
      <input
        value={job}
        onChange={event => setJob(event.target.value)}
      />
      <button onClick={handleAddItem}>ADD</button>
      <ul>
        {jobs.map(function (item, index) {
          return <li key={index}>{item} <button onClick={()=>handleDeleteItem(index)}>Delete</button></li>
        }
        )}
      </ul>
    </div>
  )
}

export default App;
```
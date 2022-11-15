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
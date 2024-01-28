import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    // method - 1
    /*
    count = count + 1;
    setCount(count);
    */

    // method - 2
    
    setCount(count + 1);
  }

  const removeValue = () => {
    if(count > 0){
      setCount(count - 1);
    }
    
  }

  return (
    <>
    <h1>React First Project</h1>
    <h2>Counter {count} </h2>
    <button 
    onClick={addValue}
    >Add </button> {" "}
    <button
    onClick={removeValue}
    >Remove </button>
    </>
  )
}

export default App

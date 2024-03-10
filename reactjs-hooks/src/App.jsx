import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  const array = useState(0);
  //  const count = array[0];
  //  const setcount = array[1];
  //  console.log(array);

  const [count, setCount] = useState(0)
  const [name, setname] = useState(" ")
  const [details, setdetails] = useState({objectname: " ", counter: 0});

  // here prev stands for previous value  and ... destructuring the object 

  const Increasecounter = () => {
    setdetails((prev) => ({
      ...prev, 
      counter: prev.counter + 1}),

      )}

  // const counter = () =>{
  //   setCount(count + 1);
  // }

  return (
    <>
    {/* usestate in button or state change  */}

     <div>
      <h1>Counter: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
     </div>

     {/* useState in input  text*/}

     <div>
      <input type="text" onChange={(e) => {setname(e.target.value)}} />
      <p> Text in the input box : {name} </p>
     </div>

     {/* usestate in object  */}

    <div>
      <h1>{details.objectname} and counter {details.counter}</h1>
      <button onClick={Increasecounter}>Increase</button>
    </div>

    </>
  )
}

export default App

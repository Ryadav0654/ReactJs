import { useState } from 'react'
import UseEffectHooks from './Components/UseEffectHooks'
import UseMemoAndCallback from './Components/UseMemoAndCallback'
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
      <h2>{details.objectname} and counter {details.counter}</h2>
      <button onClick={Increasecounter}>Increase</button>

      {/* useMemo and useCallback  */}
        <UseMemoAndCallback/>
      {/* useEffect Hooks  */}
      <UseEffectHooks/>
    </div>

    </>
  )
}

export default App

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState('olive');

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color }}>
        <div className="flex flex-wrap  justify-center fixed bottom-12 inset-x-0">
        <div className="flex flex-wrap rounded-full justify-center bg-white py-3 px-2 ">
          <button className="mx-2 bg-red-700 text-2xl rounded-3xl px-4 py-1 border-red-700 border-solid border w-fit" onClick={() => setcolor('red')}>
            Red
          </button>
          <button className="mx-3 text-2xl bg-green-700 rounded-3xl px-4 py-2 border-green-700 border-solid border w-fit" onClick={() => setcolor('green')}>
            Green
          </button>
          <button className="mx-3 text-2xl bg-blue-700 rounded-3xl px-4 py-1 border-blue-700 border-solid border w-fit" onClick={() => setcolor('blue')}>
            Blue
          </button>
        </div>
        </div>
       
      </div>
    </>
  );
}

export default App;

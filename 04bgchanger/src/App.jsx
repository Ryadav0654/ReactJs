import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState('olive');

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color }}>
        <div className="flex flex-wrap  justify-center fixed bottom-12 inset-x-0">
        <div className="flex flex-wrap rounded-full justify-center bg-white py-3 px-2 ">
          <button className="mx-2 bg-red-700 text-xl rounded-3xl px-4 py-1 border-solid border w-fit" onClick={() => setcolor('red')}>
            Red
          </button>
          <button className="mx-3 text-xl bg-green-700 rounded-3xl px-4 py-2 b border-solid border w-fit" onClick={() => setcolor('green')}>
            Green
          </button>
          <button className="mx-3 text-xl bg-blue-700 rounded-3xl px-4 py-1  border-solid border w-fit" onClick={() => setcolor('blue')}>
            Blue
          </button>
          <button className="mx-3 text-xl bg-pink-700 rounded-3xl px-4 py-1  border-solid border w-fit" onClick={() => setcolor('pink')}>
            Pink
          </button>
          <button className="mx-3 text-xl bg-yellow-500 rounded-3xl px-4 py-1  border-solid border w-fit" onClick={() => setcolor('yellow')}>
            Yellow
          </button>
          <button className="mx-3 text-xl bg-purple-700 rounded-3xl px-4 py-1  border-solid border w-fit" onClick={() => setcolor('purple')}>
            Purple
          </button>
          <button className="mx-3 text-xl bg-orange-700 rounded-3xl px-4 py-1  border-solid border w-fit" onClick={() => setcolor('orange')}>
            Orange
          </button>
        </div>
        </div>
       
      </div>
    </>
  );
}

export default App;

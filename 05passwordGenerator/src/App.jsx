import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [passwdlength, setpasswdlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState(" ");


  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(() => {
    let passwd = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()-<>?/~+{}";
    }

    for (let i = 0; i < passwdlength; i++) {
      const Index = Math.floor(Math.random() * str.length + 1);
      passwd += str.charAt(Index);
    }

    setPassword(passwd);
  }, [passwdlength, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(Password)
    passwordRef.current?.select()
    
  }

  useEffect(() => {
    passwordgenerator();
  }, [passwdlength, numberAllowed, charAllowed]);

  return (
    <div className="w-1/2 m-auto rounded-md shadow-lg text-white p-5 relative top-40 bg-gray-700">
      <h1 className=" text-3xl font-extrabold">Password Generator</h1>

      <div className="mt-3 flex  justify-center w-full p-2">
        <input
          type="text"
          className="outline-none w-full py-1 px-3 rounded-s-md text-blue-700 font-medium"
          value={Password}
          readOnly
          placeholder="password"
        />

        <button className="bg-blue-700 text-white rounded-e-md py-1 px-3" onClick={copyPasswordToClipboard}>
          Copy
        </button>
      </div>

      <div className="flex items-center gap-x-2 p-2">
        <input
          type="range"
          value={passwdlength}
          min={8}
          max={20}
          onChange={(e) => setpasswdlength(e.target.value)}
          id="length"
        />
        <label htmlFor="length">length: {passwdlength}</label>
      </div>

      <div className="flex items-center gap-x-2  p-2">
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          id="number"
        />
        <label htmlFor="number">Numbers</label>
      </div>

      <div className="flex items-center gap-x-2  p-2">
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
          id="character"
        />
        <label htmlFor="character">Characters</label>
      </div>
    </div>
  );
}

export default App;

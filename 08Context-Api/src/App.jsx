import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1 className='font-bold text-3xl text-center '>React with Context Api </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

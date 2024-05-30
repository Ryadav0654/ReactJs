import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './Appwrite/auth'
import './App.css'
import { login, logout } from './Store/authSlice'
import { Footer, Header } from './Components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    }).finally(() => setLoading(false))
  }, [])


  // console.log(import.meta.env.VITE_APPWRITE_URL);

  return !loading ? 
  (<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
        {/* {outlet} */}
        <h1 className='text-3xl font-bold '>A Blogger website with appwrite.</h1>
      </main>
      <Footer/>
    </div>
    
  </div> )
  : <h1>Loading...</h1>;
}

export default App

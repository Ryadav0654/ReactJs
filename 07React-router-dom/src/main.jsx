import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/HomePage/Home.jsx'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github , {getGithubInfo} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Home/>} />
      <Route path='about' element = {<About/>} />
      <Route path='user' element = {<User/>}>
        <Route path=':userid' element = {<User/>}/>
      </Route>
      {/* loading data initialy */}
      <Route path='github' loader={getGithubInfo}  element= {<Github/>}/>
      {/* this route is work when we excess not define route  */}

      <Route path='*' element ={<div> 404 Page not Found</div>}/> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

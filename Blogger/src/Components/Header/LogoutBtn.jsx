import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../Appwrite/auth'
import {logout} from '../../Store/authSlice'


function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button>Logout</button>
  )
}

export default LogoutBtn
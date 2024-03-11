import React from 'react'
import { useParams } from 'react-router-dom'

function User () {

    const {userid} = useParams()
  return (
    <div className='text-black font-bold text-center text-5xl bg-orange-400 py-5'>User : {userid} </div>
  )
}

export default User 
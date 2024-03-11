import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Github() {
    // const [data , setData] = useState([]);

    // useEffect(() => {

    //     fetch('https://api.github.com/users/Ryadav0654')
    //     .then((response) => response.json())
    //     .then(data => setData(data));

    // })

    // more optimize code 

    const data = useLoaderData()

  return (
    <div>Name: {data.name}</div>
  )
}

export default Github


export const getGithubInfo = async () =>{

    const response = await fetch('https://api.github.com/users/Ryadav0654')
    return response.json();
}
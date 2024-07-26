import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Userdetails() {


   const navigate =  useNavigate();
   const goBack =()=>{
    navigate('/user')
   }


    const {name} = useParams()
  return (
    <div className='  m-auto mt-10'>
    <h1 className='text-3xl font-bold'>User Deatils</h1>
    <h1 className='text-3xl font-bold mt-6 text-emerald-500 capitalize'>Hi {name}</h1>
    <button onClick={goBack} className=' bg-red-400 px-5 py-1 mt-5 rounded hover:bg-red-500 '>Go Back</button>
  </div>
  )
}

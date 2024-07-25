import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context';

export default function User() {

  const {users, setusers} = useContext(UserContext)
  // console.log(users);

  return (
    <div>
      <h1 className=' text-2xl mb-4'>User List</h1>
      <div className='flex flex-col gap-2 w-1/4'>
      {
        users.map((u)=>(

          <h3 key={u.id}  className='px-4 py-2 bg-red-200 '> {u.name}</h3>


        ))
      }</div>

    </div>
  )
}

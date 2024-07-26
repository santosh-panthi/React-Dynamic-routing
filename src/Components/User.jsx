import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='flex flex-col justify-center gap-5 w-1/3 rounded mt-10'>
        <h1 className='text-3xl text-red-300 font-semibold'>User</h1>


      <Link className='bg-red-300 hover:bg-red-400 px-5 py-2' to="/user/john">John</Link>
      <Link className='bg-red-300 hover:bg-red-400 px-5 py-2' to="/user/hari">Hari</Link>
      <Link className='bg-red-300 hover:bg-red-400 px-5 py-2' to="/user/anjali">Anjali</Link>
      <Outlet/>
    </div>
  )
}

export default User

import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <Link to="/" className='bg-red-700 font-semibold text-white rounded px-3 py-2 hover:bg-red-900'>Logout</Link>
    </div>
  )
}

export default Logout
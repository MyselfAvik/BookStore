import React from 'react'
import { Link } from 'react-router-dom'

function login() {
  return (
   <>
   <div>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2 '>
        <span>Email</span>
        <br />
        <input type="email" 
        placeholder='Enter Your Email'
        className='w-80 px-3 border rounded-md outline-none'/>
        </div>
        <div className='mt-4 space-y-2 '>
        <span>Password
        </span>
        <br />
        <input type="password" 
        placeholder='Enter Your password'
        className='w-80 px-3 p-y-1 border rounded-md outline-none'/>
        


    </div>
    <div className='flex justify-around '>
    <button className="btn btn-secondary h-8 mt-8 ml-16">Login</button>
    <h3 className='mt-8 p-4'>Not registered?
    <Link 
    to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></h3>
    </div>
  </div>
</dialog>
    </div></>
  )
}

export default login

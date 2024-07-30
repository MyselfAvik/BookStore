import React from 'react'

function signup() {
  return (
    <>
    <div className='flex h-screen justify-center items-center'>
    <div id="my_modal_3" className="border-[2px] shadow-md p-5 rounded-3xl">
  <div className="">
    <form method="div">
      {/* if there is a button in form, it will close the modal */}
      <button 
    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">SignUp</h3>
    <div className='mt-4 space-y-2 '>
        <span>Name</span>
        <br />
        <input type="text" 
        placeholder='Enter Your name'
        className='w-80 px-3 border rounded-md outline-none'/>
        </div>
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
    <div className='mt-4 space-y-2 '>
        <span>Confirm Password
        </span>
        <br />
        <input type="password" 
        placeholder='Enter Your password'
        className='w-80 px-3 p-y-1 border rounded-md outline-none'/>
    </div>
    <div className='flex justify-around '>
    <button className="btn btn-secondary h-8 mt-8 ml-16">Login</button>
    <h3 className='mt-8 p-4'>Not registered?
  
</h3>    </div>
  </div>
</div>
  
  </div>



    </>
  )
}

export default signup


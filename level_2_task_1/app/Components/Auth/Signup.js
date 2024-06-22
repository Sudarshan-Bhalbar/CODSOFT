import React from 'react'

const Signup = () => {
  return (
    <section className=' w-screen h-screen lg:h-screen flex justify-end items-center lg:w-screen bg-blue-300'>

      <div className='w-8/12 h-screen py-20 bg-slate-50 rounded-s-3xl flex flex-col space-y-10 justify-center items-center'>
      <h1 className='text-5xl font-semibold text-slate-900'>Create Account</h1>
      <button className='w-fit h-fit bg-sky-500 py-1 px-3 rounded-md text-slate-200'>Sign Up Now</button>
      </div>
    </section>
  )
}

export default Signup
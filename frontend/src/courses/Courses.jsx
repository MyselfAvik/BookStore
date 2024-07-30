import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Course from '../components/course'
import lists from "../lists.json"
function Courses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course/>
    </div>
    <Footer/>


    </>
  )
}

export default Courses

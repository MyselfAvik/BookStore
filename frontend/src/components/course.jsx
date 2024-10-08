import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axiox from "axios"




const Course = () => {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res=await axiox.get("http://localhost:4000/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[])
  return (
    <> <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
      <h2 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you
        <span className='text-pink-500'> Here! :)</span></h2>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque maiores ipsum voluptas sapiente totam mollitia officiis. Inventore quis eaque illo repellat? Iste minima sint modi ipsam labore facere eos voluptatem harum, expedita hic, animi adipisci quaerat quos nisi dolor, praesentium id facilis voluptatum? Explicabo minima cupiditate earum corporis tempore.</p> 
        <Link to="/"><button className=" mt-6 btn btn-secondary">Back</button></Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {
        book.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
      }
    </div>
    </div>
    </>
   
  )
}

export default Course


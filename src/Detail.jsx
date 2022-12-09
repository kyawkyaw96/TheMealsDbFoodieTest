import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'
import {IoMdArrowBack} from 'react-icons/io'
import {BsArrowBarUp} from 'react-icons/bs'
import Loader from './Loader/Loader';


const Detail = () => {
  const {id}=useParams();
  const [meal,setMeal]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const getSingleDetails =async ()=>{
    const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(data.meals[0]);
    setMeal(data.meals[0]);
    setIsLoading(false);
  };
  useEffect(()=>{
    getSingleDetails()
  },[]);
  const up =()=>{
    window.scrollTo(0,0)
  };
  
  return (
   <>
    {
      isLoading? (<Loader/>):(
        <div className=' flex flex-col gap-5 py-10  p-6 relative'>
          <Link to={`/`}><IoMdArrowBack className=' text-4xl hover:scale-105 hover:-translate-x-1'/></Link>
          <img src={meal.strMealThumb} width="400px" className=" rounded-md shadow-md" alt="" />
          <h1 className=' w-20 text-center rounded-md  text-sm  text-white bg-pink-500 px-2 py-1 '>{meal.strCategory}</h1>
          <h1 className=' text-xl font-bold'>{meal.strMeal}</h1>
          <h3 className=' text-2xl font-bold'>{meal.strArea}</h3>
          <p className=' text-gray-500'>{meal.strInstructions}</p>
          <div className=' flex'>
            <a href={meal.strYoutube} target="_blank"><AiFillYoutube className=' text-4xl hover:scale-110 text-red-500'/>
              <span className=' text-gray-500 cursor-pointer hover:text-red-500 hover:underline '>watch on youtube</span>
            </a>
          </div>
          <button onClick={up} className=' absolute bottom-2 right-0 hover:-translate-y-1' ><BsArrowBarUp className=' text-4xl'/></button>
        </div>
      )
    }
    
   </>
  )
}

export default Detail

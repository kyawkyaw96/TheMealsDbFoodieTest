import React from 'react'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Card = ({meal}) => {
  
  return (
    <div className=' flex flex-col hover:scale-105 duration-300 w-64 h-[400px] items-center justify-center gap-5 p-5 rounded-lg border-2 relative shadow-lg hover:shadow-xl '>
      <img src={meal.strMealThumb} width="200px" className=' rounded-lg' alt="" />
      <h1>{meal.strMeal}</h1>
      <button className=' text-white rounded-lg bg-pink-500 px-10 py-2 absolute bottom-4'>
        <Link to={`./detail/${meal.idMeal}`}> <AiFillEye className=' text-2xl'/></Link>
      </button>
    </div>
  )
}

export default Card

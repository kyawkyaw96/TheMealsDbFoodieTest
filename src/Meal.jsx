import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import {BsArrowBarUp} from 'react-icons/bs'
import Loader from './Loader/Loader';


const Meal = () => {
  const [meals,setMeals]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const getMeal =async ()=>{
    const {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    // console.log(data.meals);
    setMeals(data.meals);
    setIsLoading(false)
  };
 
  useEffect(()=>{
    getMeal();
  },[]);
  const goTop= () =>{
    window.scrollTo(0,0)
  }
  return (
    <>
    {isLoading?(<Loader/>):(
      <div className=' flex flex-wrap gap-7 items-center justify-center relative mb-20'>
          
          {meals?.map((meal) => (
            <Card key={meal.idMeal} meal={meal}/>
            )
          )};
          <button className=' absolute bottom-1 right-0 hover:-translate-y-1' onClick={goTop}><BsArrowBarUp className=' text-4xl'/></button>
      </div>
    )}
    </>
  )
}

export default Meal

import React from 'react'
import {RiRestaurantFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <Link to='/'>
    <div className='flex gap-3  items-center py-8'>
      <div className=' text-4xl  text-pink-500 '>
      <RiRestaurantFill />
      </div>
      <h1 className='text-4xl'> Foodie</h1>
    </div>
    </Link>
    </>
  )
}

export default Nav

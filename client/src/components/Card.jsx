import React from 'react'
import preview from '../assets'

const Card = (data,title) => {
  return (
    <div className='md:w-1/4 w-1/2 border-black h-auto'>
        <img src={preview} alt="" />
    </div>
  )
}

export default Card
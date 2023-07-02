import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='w-full h-16 bg-[#1c1d20] text-white flex items-center '>
        <div className="flex justify-between w-full">
            <div className='py-3 md:px-6 pl-4'>
                <Link to='/'><h1 className='md:text-xl  font-bold text-[#36a3db]'>NEW OPEN AI</h1></Link>
            </div>
            <div className='items-center flex'>
                <ul className='flex items-center px-4 '>
                    <Link to='/'><li className='md:px-3 px-1'>Home</li></Link>
                    <Link to='/about'><li className='md:px-3 px-2'>About</li></Link>
                    <Link to='/createpost'><li className='md:px-2 px-2 bg-[#077dac] text-white py-2 rounded-lg hover:cursor-pointer hover:bg-purple-600'>Create Post</li></Link>
                </ul>
            </div>
        </div>

    </header>
  )
}

export default Navbar
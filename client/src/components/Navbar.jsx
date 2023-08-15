import React, { useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import { Appstate } from '../App'

const Navbar = () => {
    
    const useAppstate=useContext(Appstate);


  return (
    <header className='w-full h-16 bg-[#1c1d20] text-white flex items-center '>
        <div className="flex justify-between w-full">
            <div className='py-3 md:px-6 pl-4'>
                <Link to='/'><h1 className='md:text-xl  font-bold text-[#36a3db]'>NEW OPEN AI</h1></Link>
            </div>
            <div className='items-center flex'>
                <ul className='flex items-center px-4 '>
                    <Link to='/'><li className='md:px-3 px-1'>Home</li></Link>
                    {/* <Link to='/about'><li className='md:px-3 px-2'>About</li></Link> */}
                    <Link to='/createpost'><li className='md:px-2 p-2 md:mx-1 md:bg-[#2f3336] drop-shadow-lg text-white rounded-lg hover:cursor-pointer hover:bg-purple-600'>Create Post</li></Link>
                    {!useAppstate.loggedin ?<>
                    <Link to='/register'><li className='md:px-2 p-2 md:mx-3 hover:bg-[#057a09] bg-[#0aab0f] text-white rounded-lg drop-shadow-lg hover:cursor-pointer'>Register</li></Link>
                    <Link to='/login'><li className='md:px-2 p-2 md:mx-2 hover:bg-[#05597a] bg-[#0a6dab] text-white rounded-lg drop-shadow-lg hover:cursor-pointer'>Login</li></Link></>
                    :<><p className='px-3  text-lg '>Welcome <span className='font-semibold text-blue-300'> {useAppstate.userName}</span></p>
                    <Logout/></>
                    }
                </ul>
            </div>
        </div>

    </header>
  )
}

export default Navbar
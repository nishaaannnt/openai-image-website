import React, { useState } from 'react'
import FormField from '../components/FormField';

const  Home = () => {

  // declare all the required states
  const [searchText,setsearchText]=useState('');
  const [loading,setloading]=useState(false);

  // changes function for search in home page
  const handleSearchChange=(e)=>{
    setsearchText(e.target.value);
  }

  return (
    <section id="home " className='h-auto w-full bg-[#1c1d20]'>
        <div className=' h-[calc(100vh-73px)]  m-auto flex justify-center items-center'>
          <h1 className='md:text-4xl  text-3xl text-center text-white font-bold '><span className='text-[#36a3db]'> WELCOME</span> TO OPEN AI BASED IMAGE GENERATION TOOL</h1>
        </div>
        {/* this is a reusable form component */}
        <div>
          <FormField
          labelName="Search post"
          placeholder="Search for keywords"
          type='text'
          name='text'
          value={searchText}
          handleChange={handleSearchChange}
          />
        </div>
        <div>
          {loading?<>Loading...</>:<>
            
          </>}
        </div>
    </section>
  )
}

export default Home;
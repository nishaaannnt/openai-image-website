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
    <section id="home " className='h-screen w-full bg-[#1c1d20]'>
        
        {/* this is a reusable form component */}
        <div className='flex items-center justify-center py-6'>
          <FormField
          labelName=""
          placeholder="Search for keywords"
          type='text'
          name='text'
          value={searchText}
          handleChange={handleSearchChange}
          />
        </div>
        <div className='h-auto py-16 mt-8 flex justify-center items-center'>
          <h1 className='md:text-4xl  text-3xl text-center text-white font-bold '><span className='text-[#36a3db]'> WELCOME</span> TO OPEN AI BASED IMAGE GENERATION TOOL</h1>
        </div>
        <div>
          {loading?<>Loading...</>:<>
            
          </>}
        </div>
    </section>
  )
}

export default Home;
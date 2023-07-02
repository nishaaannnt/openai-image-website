import React,{useState} from 'react'
import FormField from '../components/FormField';

const Createpost = () => {

    // declare all the required states
    const [searchText,setsearchText]=useState('');
    const [loading,setloading]=useState(false);

  const handleSearchChange=()=>{
    
  }

  return (
    <section id="home " className='h-screen md:p-12 p-8 w-full bg-[#1c1d20]'>
        <div className=']  m-auto flex justify-center items-center'>
          <h1 className='md:text-4xl mt-6 mb-6 text-2xl text-center text-white font-bold '><span className='text-[#36a3db]'>Create </span>your imagination</h1>
        </div>
        {/* this is a reusable form component */}
        <div className='flex-col flex  items-center'> 
          <FormField
          labelName="Your name"
          placeholder="Enter your name"
          type='text'
          name='text'
          value={searchText}
          handleChange={handleSearchChange}
          />
          <FormField
          labelName="Search post"
          placeholder="Search for keywords"
          type='text'
          name='text'
          surpriseMe={true}
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

export default Createpost;
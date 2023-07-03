import React from 'react'

const FormField = ({labelName,name,placeholder,type,value,handleChange,surpriseMe,handleSurpriseMe}) => {
  return (
    <div className='px-4 md:mt-4 mt-3 py-3 flex flex-col'>
      <div className='mb-1'>
        <label className='md:text-xl text-white ' htmlFor={name}>{labelName}</label>
        {surpriseMe&&<>
          <button onClick={handleSurpriseMe} 
            className='md:px-2 px-2 mx-4 bg-[#077dac] text-white py-2 rounded-lg hover:cursor-pointer hover:bg-purple-600'>Surprise Generate</button>
        </>}
        </div>
        <input className='w-[calc(100vw-20vw)] mt-4 rounded-xl p-3 py-2 border-gray focus:outline-none focus:border-black bg-gray-50 text-[#077dac]' 
        type={type}
        name={name}
        placeholder={placeholder} 
        value={value} 
        onChange={handleChange}
        required/>
    </div>
  )
}

export default FormField
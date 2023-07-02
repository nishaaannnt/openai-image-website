import React from 'react'

const FormField = ({labelName,name,placeholder,type,value,handleChange}) => {
  return (
    <div className='px-4'>
        <label className='text-xl text-white ' htmlFor={name}>{labelName}</label>
        <input className='w-[calc(100vw-80px)] mt-4 rounded-lg p-3 py-2 border bg-gray-50' 
        type={type}
        placeholder={placeholder} 
        value={value} 
        onChange={handleChange}
        required/>
    </div>
  )
}

export default FormField
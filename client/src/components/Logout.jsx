import React from 'react'

const Logout = () => {

    const handleLogout=()=>{
        localStorage.removeItem('token');
        window.location.href='/';
    }

  return (
    <div>
        <button className='p-2 mx-2 rounded-lg hover:bg-slate-800 bg-slate-600 transition' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
import React from 'react'

const Logout = () => {

    const handleLogout=()=>{
        localStorage.removeItem('token');
        alert('user logged out successfully');
        window.location.href='/';
    }

  return (
    <div>
        <button className='p-2 rounded-lg hover:bg-slate-800 transition' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
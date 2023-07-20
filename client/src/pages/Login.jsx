import React from "react";
import { useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {
    
    const [user,setUser] = useState({
        email:'',
        password:''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email,password} = user;
        // console.log(email,password)
        if(email&&password){
            try {
                const response=await fetch('http://localhost:8080/api/login',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        email,password
                    })
                })
                if(response.status===200){
                  const data = await response.json();
                  alert('user Logged in successfully');
                }else{
                  alert("response is not 200")
                }

            } catch (error) {
                console.log(error);
            }
        }else{
            console.log('all fields are required');
        }
    }
    const handleInputs = (e) => {
        const name=e.target.name;
        const value=e.target.value;
        // console.log(name,value)

        setUser({...user,[name]:value})
    }
  return (
    <section
      id="home "
      className="h-auto min-h-screen md:px-24 w-full bg-[#1c1d20]"
    >
      <div className="h-auto md:px-0 px-4 py-16 flex justify-center items-center">
        <h1 className="md:text-4xl  text-2xl text-center text-white font-bold drop-shadow-lg">
          <span className="text-[#36a3db]">Create</span> your account to get
          started
        </h1>
      </div>

      <form action="" onSubmit={handleSubmit} method="post">
        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-col w-1/2">
            <div className="flex flex-col mb-4 gap-1">
              <label htmlFor="email" className="text-lg mb-2 text-white">
                Email
              </label>
              <input
                type="email"
                onChange={handleInputs}
                name="email"
                id="email"
                placeholder="email"
                className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400"
              />
              <label htmlFor="password" className="text-lg mb-2 text-white">
                Password
              </label>
              <input
                type="password"
                onChange={handleInputs}
                name="password"
                id="password"
                placeholder="password"
                className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400"
              />
            </div>
            <button type="submit" className="bg-[#33a140] hover:bg-green-900 p-2 rounded-lg text-white mt-6">Login</button>
          </div>
              <div className="flex-col  text-white my-5">
                  <p className="text-center">OR</p>
                  <Link to="/register" className="text-xl text-[#968fff]">Sign Up</Link>
              </div>
        </div>
        <div><img src="" alt="" /></div>
      </form>
    </section>
  )
}

export default Login
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";

const Register = () => {

    const [user,setUser] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    })
    const[loading,setloading]=useState(false);
    const[errorMessage,seterrorMessage]=useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {firstname,lastname,email,password} = user;
        // console.log(firstname,lastname,email,password)
        if(firstname&&lastname&&email&&password){
          setloading(true);
            try {
                const response=await fetch('https://openai-image-website-backend.vercel.app/api/register',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        firstname,lastname,email,password
                    })
                })

                const data = await response.json();
                window.location.href='/login';
            } catch (error) {
                seterrorMessage('Something went wrong');
                setTimeout(()=>{
                  seterrorMessage('');
                },[3000])
            }finally{
              setloading(false);
            }
        }else{
            seterrorMessage('All fields are required');
            setTimeout(()=>{
              seterrorMessage('');
            }
            ,[3000])
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
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-3/2 md:w-1/2">
            <div className="flex flex-col mb-4 gap-1">
              <label htmlFor="username" className="text-lg mb-2 text-white">
                First Name
              </label>
              <input
                type="text"
                onChange={handleInputs}
                name="firstname"
                id="firstname"
                placeholder="firstname"
                className="border-2 mb-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400"
              />
              <label htmlFor="lastname" className="text-lg mb-2 text-white">
                Last Name
              </label>
              <input
                type="text"
                onChange={handleInputs}
                name="lastname"
                id="lastname"
                placeholder="lastname"
                className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400"
              />
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
              <p id="error" className="text-lg text-center text-orange-400 px-6">{errorMessage}</p>
            </div>{
              loading?<button type="submit" className="bg-green-900 p-2 rounded-lg text-white mt-6">Creating your Account...</button>:
              <button type="submit" className="bg-[#33a140] hover:bg-green-900 p-2 rounded-lg text-white mt-6">Create Account</button>
            }
              <div className="flex-col text-center text-white my-5 ">
                  <p className="text-center my-3">OR</p>
                  <Link to="/login" className="text-xl bg-slate-500 rounded-lg px-5  py-2 ">Log in </Link>
              </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;

import React, { useState,useContext } from "react";
import { FormField, Loader } from "../components";
import { useNavigate } from "react-router-dom";
import { surpriseMe } from "../utils";
import { preview } from "../assets";
import {Appstate} from '../App';

const Createpost = () => {
  const navigate = useNavigate();
  const useAppstate=useContext(Appstate);

  // declare all the required states
  const [loading, setloading] = useState(false);
  const [generatingImg, setgeneratingImg] = useState(false);
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name && form.prompt && form.photo) {
      setloading(true);
      try {
        const response = await fetch("https://openai-image-website1.vercel.app/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...form}),
        });
        const data = await response.json();
        console.log(data);
        alert("Post created successfully");
        navigate("/");
      } catch (error) {
        console.log(error);
        alert(error);
      } finally {
        setloading(false);
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  const generateImg = async () => {
    if (form.prompt) {
      try {
        setgeneratingImg(true);
        const response = await fetch("https://openai-image-website1.vercel.app/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        console.log(data);

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        console.log(error);
        alert(error);
      } finally {
        setgeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt");
      console.log("Please enter a prompt");
    }
  };

  // Handle changes in the input field
  const handleSearchChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Handle surprise me button
  const handleSurpriseMe = () => {
    const randomPrompt = surpriseMe(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section id="home " className="h-auto min-h-screen  md:p-12 p-8 w-full bg-[#1c1d20]">
      <div className="]  m-auto flex justify-center items-center">
        <h1 className="md:text-4xl mt-6 mb-6 text-2xl text-center text-white font-bold ">
          <span className="text-[#36a3db]">Create </span>your imagination
        </h1>
      </div>
      {/* this is a reusable form component */}
      {useAppstate.loggedin?
      <form action="" onSubmit={handleSubmit}>
        <div className="flex-col flex  items-center">
          <FormField
            labelName="Your name"
            placeholder="Enter your name"
            type="text"
            name="name"
            value={form.name}
            handleChange={handleSearchChange}
          />
          <FormField
            labelName="Enter prompt"
            placeholder="Search for keywords"
            type="text"
            name="prompt"
            surpriseMe={true}
            value={form.prompt}
            handleChange={handleSearchChange}
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>

        <div className="h-auto md:w-96 md:mx-24 mt-8 relative">
          <div id="errrr"></div>
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-contain"
            />
          ) : (
            <img src={preview} alt="" className="bg-white  rounded-xl" />
          )}
          {generatingImg && (
            <div className="absolute flex items-center justify-center bg-[rgba(0,0,0,0.5)] inset-0 w-96 rounded-xl">
              <Loader />
            </div>
          )}
        </div>
        <div className="flex flex-col md:mx-16 gap-3  py-6">
          <button type="button"
            onClick={generateImg}
            className="md:px-2 px-2 mx-4 bg-[#00980f]  text-white py-2 rounded-lg hover:cursor-pointer hover:bg-[#005d0b] md:w-1/3"
          >
            {generatingImg ? <>Generating...</> : <>Generate</>}
          </button>
          <button
            type="submit"
            className="md:px-2 px-2 mx-4 bg-[#077dac] text-white py-2 rounded-lg hover:cursor-pointer hover:bg-[#004967] md:w-1/3"
          >
            {loading ? <>Sharing...</> : <>Share with Community</>}
          </button>
        </div>
      </form>:<div className="flex justify-center items-center my-28">
        <h1 className="text-2xl text-white">Please login to create a post</h1>
      </div>}
    </section>
  );
};

export default Createpost;

import React, { useState } from "react";
import { FormField, Loader } from "../components";
import { surpriseMe } from "../utils";
import { preview } from "../assets";

const Createpost = () => {
  // declare all the required states
  const [searchText, setsearchText] = useState("");
  const [loading, setloading] = useState(false);
  const [generatingImg, setgeneratingImg] = useState(false);
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  // Handle changes in the input field
  const handleSearchChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Handle surprise me button
  const handleSurpriseMe = () => {
    const randomPrompt = surpriseMe(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section id="home " className="h-auto  md:p-12 p-8 w-full bg-[#1c1d20]">
      <div className="]  m-auto flex justify-center items-center">
        <h1 className="md:text-4xl mt-6 mb-6 text-2xl text-center text-white font-bold ">
          <span className="text-[#36a3db]">Create </span>your imagination
        </h1>
      </div>
      {/* this is a reusable form component */}
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
      
      <div className="h-auto  md:mx-24 mt-8 relative">
        {form.photo?
          <img src={form.photo} alt={form.prompt} />
          :<img src={preview} alt="" className="bg-white w-96 rounded-xl" />
        }
        {generatingImg&&
        <div className="absolute flex items-center justify-center bg-[rgba(0,0,0,0.5)] inset-0 w-96 rounded-xl">
          <Loader />
        </div>
        }
      </div>
      <div className="flex flex-col md:mx-16 gap-3  py-6">
        <button className='md:px-2 px-2 mx-4 bg-[#005d0b] text-white py-2 rounded-lg hover:cursor-pointer hover:bg-[#00980f] md:w-1/3'>Generate</button>
        <button className='md:px-2 px-2 mx-4 bg-[#077dac] text-white py-2 rounded-lg hover:cursor-pointer hover:bg-purple-600 md:w-1/3'>Submit</button>
      </div>

    </section>
  );
};

export default Createpost;

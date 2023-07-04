import React, { useState } from "react";
import FormField from "../components/FormField";

// Render the contents of cards
const RenderCards = ({data, title}) => {
  if (data?.lenght > 0) {
    return data.map((post) => <Card />);
  }
  return (
    <>
      <h2 className="tect-xl text-white font-bold">{title}</h2>
    </>
  );
};


const Home = () => {
  // declare all the required states
  const [searchText, setsearchText] = useState("");
  const [allPosts, setallPosts] = useState();
  const [searchedresults, setsearchedresults] = useState();
  const [loading, setloading] = useState(false);

  // changes function for search in home page
  const handleSearchChange = (e) => {
    setsearchText(e.target.value);
  };

  return (
    <section id="home " className="h-screen md:px-24 w-full bg-[#1c1d20]">
      {/* this is a reusable form component */}
      <div className="flex items-center justify-center py-6">
        <FormField
          labelName=""
          placeholder="Search for keywords"
          type="text"
          name="text"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      <div className="h-auto py-16 mt-8 flex justify-center items-center">
        <h1 className="md:text-4xl  text-3xl text-center text-white font-bold ">
          <span className="text-[#36a3db]"> WELCOME</span> TO OPEN AI BASED
          IMAGE GENERATION TOOL
        </h1>
      </div>
      <div className="md:mt-8">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {searchText && <h2 className="text-xl text-white my-3 ">Showing search results for <span className="font-bold">{searchText}</span></h2>}
           {searchText ? (
               <RenderCards data={[]} title="No search results found" />
             ) : (
               <RenderCards data={[]} title="No images found" />
             )
        }
          </>
        )}
      </div>
    </section>
  );
};

export default Home;

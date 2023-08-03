import React, { useState } from "react";
import FormField from "../components/FormField";
import { useEffect } from "react";
import Card from "../components/Card";

// Render the contents of cards
const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  // declare all the required states
  const [searchText, setsearchText] = useState("");
  const [allPosts, setallPosts] = useState(null);
  const [searchedresults, setsearchedresults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [loading, setloading] = useState(false);

  // changes function for search in home page
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setsearchText(e.target.value);

    setSearchTimeout( 
      setTimeout(() => {
        const searchresult = allPosts?.filter(
          (post) =>
            post.prompt.toLowerCase().includes(searchText.toLowerCase()) ||
            post.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setsearchedresults(searchresult);
      }, 500)
    );
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const result = await response.json();
          setallPosts(result.data.reverse());
        }
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section
      id="home "
      className="h-auto min-h-screen md:px-24 w-full bg-[#1c1d20]"
    >
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
      <div className="h-auto md:px-0 px-4 py-16 mt-8 flex justify-center items-center">
        <h1 className="md:text-4xl  text-2xl text-center text-white font-bold ">
          <span className="text-[#36a3db]"> WELCOME</span> TO OPEN AI BASED
          IMAGE GENERATION TOOL
        </h1>
      </div>
      <div className="md:mt-8 pb-8 text-white">
        {loading ? (
          <p className="text-2xl font-bold">Loading...</p>
        ) : (
          <>
            {searchText && (
              <h2 className=" text-[#ededed] text-xl mb-3">
                Showing Results for <span className="font-bold">"{searchText}"</span>:
              </h2>
            )}
            <div className="grid px-3 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                
                  <RenderCards
                    data={searchedresults}
                    title="No Search Results Found"
                  />
              ) : (
                <RenderCards data={allPosts} title="No Posts Yet" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;

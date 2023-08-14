import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, CreatePost, Register, Login } from "./pages";

const Appstate = createContext();
const App = () => {
  const [loggedin, setloggedin] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setloggedin(true);
      console.log(token);
    } else {
      setloggedin(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Appstate.Provider value={{ loggedin }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Appstate.Provider>
    </BrowserRouter>
  );
};

export default App;
export { Appstate };

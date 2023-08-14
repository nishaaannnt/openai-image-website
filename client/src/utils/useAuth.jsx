import React, { useEffect } from "react";
import {useState} from 'react';

const useAuth = () => {
    const [loggedin, setloggedin] = useState(false);
    useEffect(() => {
    const token=localStorage.getItem('token');
    if(token){
        setloggedin(true);
    }
    },[]);

  return loggedin;
};

export default useAuth;

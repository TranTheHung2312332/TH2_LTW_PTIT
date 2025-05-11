import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {

    const location = useLocation();
    
    const [context, setContext] = useState('')

    useEffect(() => {
      if(location.pathname.endsWith('/users') || location.pathname.endsWith('/users/')){
        setContext('All of Users');
      }
      else if(location.pathname.includes('/users')){
        const data = fetchModel(`http://localhost:8081/api/user/${location.pathname.slice(-24)}`)             
        setContext(`${data.first_name} ${data.last_name}`);
      }
      else if(location.pathname.includes('/photos')){
        const data = fetchModel(`http://localhost:8081/api/user/${location.pathname.slice(-24)}`)
        setContext(`Photos of ${data.first_name} ${data.last_name}`);
      }
      else{
        setContext('home')
      }

    }, [])
    

    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar className="toolbar">
          <Typography variant="h5" color="inherit">
            Lab2 from Trần Thế Hưng
          </Typography>
          <Typography variant="h5" color="inherit">
            {context}
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;

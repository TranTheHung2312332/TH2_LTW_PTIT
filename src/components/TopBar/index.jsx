import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {

    const location = useLocation();
    
    let context = '';
    
    if(location.pathname.endsWith('/users') || location.pathname.endsWith('/users/')){
      context = 'All of Users';
    }
    else if(location.pathname.includes('/users')){
      const user = models.userModel(location.pathname.slice(-24));
      context = `${user.first_name} ${user.last_name}`;
    }
    else if(location.pathname.includes('/photos')){
      const user = models.userModel(location.pathname.slice(-24));
      context = `Photos of ${user.first_name} ${user.last_name}`;
    }
    else{
      context = 'home'
    }
    

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

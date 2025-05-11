import React, { useEffect, useState } from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";

import { Link } from 'react-router-dom';
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    let user = useParams();    
    
    const [userInfo, setUserInfo] = useState({
      first_name: null,
      last_name: null,
      location: null,
      description: null,
      occupation: null,
      _id: null
    })

    useEffect(() => {
      fetchModel(`http://localhost:8081/api/user/${user.userId}`, setUserInfo, {})
    }, [])

    return (
        <>
          <Typography variant="body1">
            <h2>{`${userInfo.first_name} ${userInfo.last_name}`}</h2>
            <p>First name: {userInfo.first_name}</p>
            <p>Last name: {userInfo.last_name}</p>
            <p>Location: {userInfo.location}</p>
            <p>Description: {userInfo.description}</p>
            <p>Occupation: {userInfo.occupation}</p>
            <Link to={`/photos/${userInfo._id}`} className="photos-link">Photos</Link>
          </Typography>
        </>
    );
}

export default UserDetail;

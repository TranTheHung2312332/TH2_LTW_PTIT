import React from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";

import { Link } from 'react-router-dom';

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    let user = useParams();
    user = models.userModel(user.userId);
    
    return (
        <>
          <Typography variant="body1">
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>First name: {user.first_name}</p>
            <p>Last name: {user.last_name}</p>
            <p>Location: {user.location}</p>
            <p>Description: {user.description}</p>
            <p>Occupation: {user.occupation}</p>
            <Link to={`/photos/${user._id}`} className="photos-link">Photos</Link>
          </Typography>
        </>
    );
}

export default UserDetail;

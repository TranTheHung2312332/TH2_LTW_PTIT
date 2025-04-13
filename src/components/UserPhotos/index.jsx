import React from "react";
import { List, ListItem, Paper } from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";

import { Link } from 'react-router-dom'


/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const user = useParams();
    const photos = models.photoOfUserModel(user.userId);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateTimeFormat = (datetime) => {
      let [date, time] = datetime.split(" ");
      
      date = date.split("-");
      date = `${monthNames[Number(date[1]) - 1]} ${date[2]}, ${date[0]}`

      return `${date} - ${time}`
    }
    
    return (
      <List component="ul" className="photos">
        {photos && photos.map(photo => (
          <ListItem key={photo._id} className="photos-item">
            <div className="photo-content">
              <img src={`/images/${photo.file_name}`} alt="" />
              <p>{dateTimeFormat(photo.date_time)}</p>
            </div>
            <ul className="comments">
              {photo.comments ? photo.comments.map(comment => (
                <li key={comment._id}>
                  <Link to={`/users/${comment.user._id}`}>
                    <h3>{`${comment.user.first_name} ${comment.user.last_name}`}</h3>
                  </Link>
                  <p className="comment-datetime">{dateTimeFormat(comment.date_time)}</p>
                  <p className="comment-content">{comment.comment}</p>
                </li>
              ))
                : <p>No comment</p>
              }
            </ul>
          </ListItem>
        ))}
      </List>
    );
}

export default UserPhotos;

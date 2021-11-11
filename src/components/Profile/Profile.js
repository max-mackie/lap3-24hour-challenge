import React from "react";
import './profileStyle.css';

export function Profile({ name, image, bio }) {
  return (
    <div>
      <figure>
      <h3 id='gName'>{name}</h3>
      <img alt="Profile Icon" src={image} />
 
        <p>{bio}</p>
      </figure>
    </div>
  );
}

import React from "react";
import './profileStyle.css';

export function Profile({ name, image, bio }) {
  return (
    <div>
      <figure>
        <img alt="Profile Icon" src={image} />
        <h3>{name}</h3>
        <p>{bio}</p>
      </figure>
    </div>
  );
}

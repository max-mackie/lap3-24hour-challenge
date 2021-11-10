import React, { useState, useEffect } from "react";
import './searchStyle.css'

export const Search = ({ onSubmit, children }) => {
  const [username, setUsername] = useState();
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setValid(false);
      alert("Please enter a username");
      return;
    }
    onSubmit(username);
  };

  return (
    <div id='searchForm'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Enter a username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

//need to add link

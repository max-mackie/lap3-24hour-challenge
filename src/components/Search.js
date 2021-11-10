import React, { useState, useEffect } from "react";
import axios from "axios";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [repos, setRepos] = useState([]);

  const clickHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.elements.query.value);
  };

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    fetch("https://api.github.com/search/repositories?q=" + inputValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRepos(data.items);
      });
  }, [inputValue]);

  console.log(repos);

  return (
    <div>
      <form onSubmit={clickHandler}>
        <input
          type="text"
          name="query"
          placeholder="Search Github Repositories"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
              <p>{repo.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import axios from "axios";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [repos, setRepos] = useState([]);

  const clickHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.elements.query.value);
  };

  useEffect(async () => {
    if (!inputValue) {
      return;
    }

    const data = await axios.get(
      "https:api.github/com/search/repositories?q=" + inputValue
    );
    setRepos(data.items);
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
      </form>
      <ul>
        {repos.map((repos) => {
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

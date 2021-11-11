import React from "react";
import './repoStyle.css'

export function Repo({ name, description, html_url, watchers_count }) {
  return (
    <div>
      <h1 id='repoName'>{name}</h1>
      <div>
        <p>{description}</p>
        <a href={html_url} target="_blank">View Repo</a>
        <p>{watchers_count} Watchers</p>
      </div>
    </div>
  );
}
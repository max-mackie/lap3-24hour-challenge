import React from "react";

export function Repo({ name, description, html_url, watchers_count }) {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <p>{description}</p>
        <a href={html_url}>View Repo</a>
        <p>{watchers_count} Watchers</p>
      </div>
    </div>
  );
}

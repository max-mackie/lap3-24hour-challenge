import React from "react";
import { Profile } from "../Profile/Profile";
import { Repo } from "../Repo/Repo";
import './resultsStyle.css';

export function Results ({ user, repos, error }) {



  return (
    <div>
      <div id='errorMsg'>
      {error && "Please enter a valid username!"}
      </div>
      {user && (
        <Profile name={user.name} image={user.avatar_url} bio={user.bio} />
      )}
      {repos && (
        <>
          {repos.map((repo) => {
            return <Repo key={repo.id} {...repo} />;
          })}
        </>
      )}
    </div>
  );
}

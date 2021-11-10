// App.js
import React, { Component, useEffect } from "react";
import { useGithubUser } from "./hooks/useGithubUsers";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";
import { Repo } from "./components/Repo";
import { Search } from "./components/Search";
import { SearchForm } from "./components/Repo";

function App() {
  const { user, repos, error, getUser } = useGithubUser();

  useEffect(() => {
    getUser("max-mackie");
  }, [user]);

  return (
    <>
      <Search onSubmit={handleSubmit} />
      <Main>
        {error && <Alert />}
        {user && (
          <Profile name={user.name} image={user.avatar_url} bio={user.bio} />
        )}
        {repos && (
          <>
            {repos.map((repo) => {
              return <Repo key={repo.id} {...repos} />;
            })}
          </>
        )}
      </Main>
    </>
  );
}
function handleSubmit(username) {
  getUser(username);
}

export default App;

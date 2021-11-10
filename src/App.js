// App.js
import React, { Component, useEffect } from "react";
import { Header } from "./components/Header";
import { useGithubUser } from "./hooks/useGithubUser";

function App() {
  useEffect(() => {
    getUser("max-mackie");
  }, [user]);

  return (
    <>
      <Header></Header>
      <Search onSubmit={handleSubmit} />
      <Main>
        {error && <Alert />}
        {user && (
          <Profile name={user.name} image={user.avatar_url} bio={user.bio} />
        )}
        {repos && (
          {
            repos.map(repo => {
              return <Repo key={repo.id} {...repos} />;
            })
          }
        )}
      </Main>
    </>
  );
}
function handleSubmit(username) {
  getUser(username);
}

export default App;
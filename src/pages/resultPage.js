import React from "react";
import { useEffect } from "react";
import { useGithubUser } from "../hooks/useGithubUsers";
import { Profile } from "../components/Profile";
import { Repo } from "../components/Repo";
import { Main } from "../components/Main";

export function ResultsPage() {
  const { user, repos, error, getUser } = useGithubUser();

  useEffect(() => {
    getUser("max-mackie");
  }, []);

  return (
    <Main>
      {error && <Alert />}
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
    </Main>
  );
}

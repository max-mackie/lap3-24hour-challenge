import React from "react";
import { Header } from "../components/Header/Header";
import { Search } from "../components/Search/Search";
import { useGithubUser } from "../hooks/useGithubUsers";
import { Footer } from "../components/Footer/footer";
import { Results } from "../components/Results/Results";

export function HomePage() {
  const { user, repos, error, getUser } = useGithubUser();

  function handleSubmit(username) {
    getUser(username);
  }

  return (
    <>
      <Header />
      <Search onSubmit={handleSubmit} />
      <Results user={user} repos={repos} error={error}/>
      <Footer />
    </>
  );
}

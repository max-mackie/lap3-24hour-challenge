import React from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { useGithubUser } from "../hooks/useGithubUsers";

export function HomePage() {
  const { getUser } = useGithubUser();

  function handleSubmit(username) {
    getUser(username);
  }

  return (
    <>
      <Header></Header>
      <h1>Welcome</h1>
      <Search onSubmit={handleSubmit} />
    </>
  );
}

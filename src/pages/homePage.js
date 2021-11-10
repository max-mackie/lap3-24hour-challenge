import {Search} from '../components/Search'

export function HomePage() {
  
    const { user, repos, error, getUser } = useGithubUser;

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
  
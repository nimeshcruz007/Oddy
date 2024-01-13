function Search({ query, setQuery }) {
  return (
    <form className="search-form">
      <input value={query} onClick={(e) => setQuery(e.target.value)} />
    </form>
  );
}

export default Search;

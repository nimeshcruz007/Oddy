import { useState } from "react";
import UserDetails from "./UserDetails";
import style from "./Header.module.css";
import Search from "./Search";

function Header() {
  const [query, setQuery] = useState("Search");

  return (
    <header className={style.oddyHeader}>
      <a href="javascript:void(0)" className={style.oddyHeaderLogo}>
        <h1>Logo</h1>
      </a>
      <Search query={query} setQuery={setQuery} />
      <UserDetails />
    </header>
  );
}
export default Header;

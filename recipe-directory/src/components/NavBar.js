import "./NavBar.css";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link to={"/"}>
          <h2 className="logo">Recipe Directory</h2>
        </Link>
        <SearchBar />
        <Link to={"Create"}>
          Create Recipe
        </Link>
      </nav>
    </div>
  );
}

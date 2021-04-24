import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalContext";

export default function Search() {
  const { search, setSearch } = useContext(GlobalContext);
  const [searchString, setSearchString] = useState("");

  const history = useHistory();

  const handleChange = (value) => {
    setSearch(value);
    setSearchString(value);

    history.push("/projects");
  };

  return (
    <div className="search">
      <input
        type="search"
        value={searchString}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="search by keyword, tech stack or project status"
      />
      <i className="search__input-icon"></i>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
import EntryForm from "./EntryForm";

const NewEntry = ({ categories, addEntrytoJournal }) => {
  let match = useMatch("/entry/new/*");
  const selectedCategeory = match.params ? match.params["*"] : -1;
  const category = categories[selectedCategeory];

  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(
    () =>
      category
        ? setErrorMsg(null)
        : setErrorMsg("Category not found please try another link"),
    [category, categories]
  );

  return (
    <div>
      <h1>New Entry for {category}</h1>
      {errorMsg && <p>{errorMsg}</p>}
      {category && (
        <EntryForm addEntrytoJournal={addEntrytoJournal} category={category} />
      )}
    </div>
  );
};

export default NewEntry;

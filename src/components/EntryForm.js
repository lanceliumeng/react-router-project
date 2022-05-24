import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EntryForm = ({ addEntrytoJournal, category }) => {
  const [entry, setEntry] = useState("");
  let navigate = useNavigate();

  const textChangeHandler = (event) => {
    setEntry(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (entry && entry.length > 0) {
      addEntrytoJournal({ category, entry });
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <textarea onChange={textChangeHandler}></textarea>
        </div>
        <input type="submit" value="Make an entry" />
      </form>
    </div>
  );
};

export default EntryForm;

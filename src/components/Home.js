import React from "react";
import { Link } from "react-router-dom";

const Home = ({ entries }) => {
  console.log(entries);
  return (
    <div>
      <h1>Home</h1>
      {entries.map((entry, index) => (
        <li key={index}>
          {entry.category} : {entry.entry}
        </li>
      ))}
      <Link to="/category">Choose a category</Link>
    </div>
  );
};

export default Home;

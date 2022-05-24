import React from "react";
import { Link } from "react-router-dom";

const CategorySelection = ({ categories }) => {
  //   console.log(categories);
  return (
    <div>
      <h1>Category Selection</h1>
      {categories.map((category, index) => (
        <li key={category}>
          <Link to={`/entry/new/${index}`}>{category}</Link>
        </li>
      ))}
    </div>
  );
};

export default CategorySelection;

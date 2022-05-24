import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CategorySelection from "./components/CategorySelection";
import Home from "./components/Home";
import NewEntry from "./components/NewEntry";
import NotFound from "./components/NotFound";

const App = () => {
  const defaultCategpries = ["Food", "Coding", "Other"];
  const [categories, setCategories] = useState(defaultCategpries);
  const [entries, setEntries] = useState([]);

  const addEntrytoJournal = (newEntry) => {
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    console.log(updatedEntries);
  };

  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/category">Category Selection </Link>
          </li>
          <li>
            <Link to="/entry/new">New Entry </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home entries={entries} />} />
          <Route
            path="/category"
            element={<CategorySelection categories={categories} />}
          />
          <Route
            path="/entry/new/*"
            element={
              <NewEntry
                categories={categories}
                addEntrytoJournal={addEntrytoJournal}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

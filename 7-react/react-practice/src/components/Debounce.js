import React, { useState, useEffect } from "react";

const Debounce = () => {
  const [term, setTerm] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounced(term);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  return (
    <div className="debounce">
      <label>Search</label>
      <input
        value={term}
        onChange={({ target }) => setTerm(target.value)}
      ></input>
      <h1>{debounced}</h1>
    </div>
  );
};

export default Debounce;

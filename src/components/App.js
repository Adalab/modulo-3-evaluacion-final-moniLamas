import "../styles/App.scss";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <h1>Rick and Morty</h1>
      <h2>Characters</h2>
      <section>
        <form action="">
          <label htmlFor="search"></label>
          <input type="text" id="search" name="search" value />
        </form>
      </section>
    </>
  );
}

export default App;

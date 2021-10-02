import "../styles/App.scss";
import "../styles/components/header.scss";
import { useState, useEffect } from "react";
import api from "../services/callToApi";
import CharacterList from "./CharacterList";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api().then((initialData) => {
      setData(initialData);
    });
  });

  return (
    <>
      <header className="header">
        <h1 className="header__title">Characters</h1>
        <img
          className="header__img"
          src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
          alt="Rick and Morty"
        />
      </header>
      <main className="container">
        <section className="form">
          <form action="">
            <label htmlFor="search" className="form__label">
              Buscador de personajes
            </label>
            <input
              type="text"
              id="search"
              name="search"
              className="form__input"
            />
          </form>
        </section>
        <section>
          <CharacterList data={data} />
        </section>
      </main>
      <footer className="footer">
        <p className="copy">&copy; Rick and Morty 2021</p>
      </footer>
    </>
  );
}

export default App;

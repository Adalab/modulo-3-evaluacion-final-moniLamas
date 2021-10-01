import "../styles/App.scss";
import { useState, useEffect } from "react";
import api from "../services/charactersApi";

function App() {
  api().then((data) => {
    console.log(data);
  });
  return (
    <>
      <header className="header">
        <h1 className="">Characters</h1>
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
          <ul className="cards">
            <li className="card">
              <a href="">
                <img className="card__img" src="" alt="" title="" />
                <h4 className="card__title">Nombre:</h4>
                <p className="card__text">Especie:</p>
                <img
                  className="card__calaver"
                  src="../images/calaverRick.jpg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p className="copy">&copy; Rick and Morty 2021</p>
      </footer>
    </>
  );
}

export default App;

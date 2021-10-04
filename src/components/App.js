import "../styles/App.scss";
import "../styles/components/header.scss";
import { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router";
import api from "../services/callToApi";
import ls from "../services/ls";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    if (ls.get("characters", []).length > 0) {
      setData(ls.get("characters", []));
    } else {
      api().then((initialData) => {
        setData(initialData);
        ls.set("characters", initialData);
      });
    }
  }, []);

  const routeData = useRouteMatch("/characterData/:id");
  const characterId = routeData !== null ? routeData.params.id : "";
  const foundCard = data.find(
    (character) => character.id === parseInt(characterId)
  );
  const handleSearchName = (ev) => {
    ev.preventDefault();
    setSearchName(ev.currentTarget.value);
  };

  const filteredData = data.filter((character) =>
    character.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );

  return (
    <>
      <header className="header">
        <img
          className="header__img"
          src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
          alt="Rick and Morty"
        />
      </header>
      <Switch>
        <Route path="/" exact>
          <main className="container">
            <Filters
              searchName={searchName}
              handleSearchName={handleSearchName}
            />
            <section className="list">
              <CharacterList data={filteredData} />
            </section>
          </main>
        </Route>
        <Route path="/characterData/:id">
          <section>
            <CharacterDetail character={foundCard} />
          </section>
        </Route>
        <Route>
          <section>Oh! Página equivocada</section>
        </Route>
      </Switch>

      <footer className="footer">
        <p className="copy">&copy; Rick and Morty 2021</p>
      </footer>
    </>
  );
}

export default App;

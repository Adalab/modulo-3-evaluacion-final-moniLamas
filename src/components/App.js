import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router";
import api from "../services/callToApi";
import ls from "../services/ls";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

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
  const handleChangeStatus = (ev) => {
    ev.preventDefault();
    setSearchStatus(ev.currentTarget.value);
  };

  const filteredData = data

    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )
    .filter(
      (character) => searchStatus === "" || searchStatus === character.status
    );

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <main className="container">
            <Filters
              searchName={searchName}
              handleSearchName={handleSearchName}
              searchStatus={searchStatus}
              handleChangeStatus={handleChangeStatus}
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

      <Footer />
    </>
  );
}

export default App;

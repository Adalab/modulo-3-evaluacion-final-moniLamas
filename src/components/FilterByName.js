import { Link } from "react-router-dom";

function FilterByName(props) {
  return (
    <>
      <label htmlFor="search" className="form__label">
        Nombre:
      </label>
      <input
        type="text"
        id="search"
        name="search"
        className="form__input"
        placeholder="Nombre del personaje"
        value={props.searchName}
        onChange={props.handleSearchName}
      />
      <Link to="/" exact>
        <span className="form__reload" onChange="handleReload">
          &#8635;
        </span>
      </Link>
    </>
  );
}

export default FilterByName;

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
    </>
  );
}

export default FilterByName;

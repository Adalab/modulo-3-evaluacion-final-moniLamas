function FilterByName(props) {
  return (
    <>
      <label htmlFor="search" className="form__label">
        Buscador por Nombre del personaje
      </label>
      <input
        type="text"
        id="search"
        name="search"
        className="form__input"
        placeholder="Personaje"
        value={props.searchName}
        onChange={props.handleSearchName}
      />
    </>
  );
}

export default FilterByName;

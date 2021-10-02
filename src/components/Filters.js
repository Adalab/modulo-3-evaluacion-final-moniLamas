function Filters(props) {
  return (
    <form className="form" action="">
      <label htmlFor="search" className="form__label">
        Buscador
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
    </form>
  );
}

export default Filters;

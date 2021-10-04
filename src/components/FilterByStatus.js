function FilterByStatus(props) {
  return (
    <>
      <label className="form__label display-block" htmlFor="gender">
        Estado:
      </label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        value={props.searchStatus}
        onChange={props.handleChangeSearchStatus}
      >
        <option value="">Todos</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknow">Se desconoce</option>
      </select>
    </>
  );
}

export default FilterByStatus;

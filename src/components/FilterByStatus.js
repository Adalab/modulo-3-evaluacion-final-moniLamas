function FilterByStatus(props) {
  return (
    <>
      <label className="form__label" htmlFor="status">
        Estado:
      </label>
      <select
        className="form__input-text"
        name="status"
        id="status"
        value={props.searchStatus}
        onChange={props.handleChangeStatus}
      >
        <option value="all">Todos</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknow">Se desconoce</option>
      </select>
    </>
  );
}

export default FilterByStatus;

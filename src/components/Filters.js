import FilterByName from "./FilterByName";
import FilterByStatus from "./FilterByStatus";
import "../styles/components/filters.scss";
import { Link } from "react-router-dom";

function Filters(props) {
  return (
    <form className="form" action="">
      <h2>Buscador de personajes</h2>
      <FilterByName
        searchName={props.searchName}
        handleSearchName={props.handleSearchName}
      />
      <Link to="/" exact>
        <span className="form__reload">&#8635;</span>
      </Link>
      <FilterByStatus
        searchStatus={props.searchStatus}
        handleChangeStatus={props.handleChangeStatus}
      />
    </form>
  );
}

export default Filters;

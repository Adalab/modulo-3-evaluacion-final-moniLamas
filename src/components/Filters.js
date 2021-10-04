import FilterByName from "./FilterByName";
import FilterByStatus from "./FilterByStatus";
import "../styles/components/filters.scss";

function Filters(props) {
  return (
    <form className="form" action="">
      <FilterByName
        searchName={props.searchName}
        handleSearchName={props.handleSearchName}
      />
      <FilterByStatus
        searchStatus={props.searchStatus}
        handleChangeStatus={props.handleChangeStatus}
      />
    </form>
  );
}

export default Filters;

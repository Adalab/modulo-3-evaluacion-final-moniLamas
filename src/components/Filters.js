import FilterByName from "./FilterByName";
import FilterByStatus from "./FilterByStatus";

function Filters(props) {
  return (
    <form className="form" action="">
      <FilterByName
        searchName={props.searchName}
        handleSearchName={props.handleSearchName}
      />
      <FilterByStatus
        searchName={props.searchStatus}
        handleSearchName={props.handleStatus}
      />
    </form>
  );
}

export default Filters;

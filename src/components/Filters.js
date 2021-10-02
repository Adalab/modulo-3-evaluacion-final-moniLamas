import FilterByName from "./FilterByName";

function Filters(props) {
  return (
    <form className="form" action="">
      <FilterByName
        searchName={props.searchName}
        handleSearchName={props.handleSearchName}
      />
    </form>
  );
}

export default Filters;

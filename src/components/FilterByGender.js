const FilterByGender = (props) => {
  return (
    <>
      <label htmlFor="gender">Male</label>
      <input
        type="radio"
        name="gender"
        id="gender"
        value="Male"
        onChange={props.handleChangeGender}
        checked={props.seachByGender === "Male"}
      />
      <label htmlFor="gender">Female</label>
      <input
        type="radio"
        name="gender"
        id="gender"
        value="Female"
        onChange={props.handleChangeGender}
        checked={props.seachByGender === "Female"}
      />
      <label htmlFor="gender">Unknown</label>
      <input
        type="radio"
        name="gender"
        id="gender"
        value="unknown"
        onChange={props.handleChangeGender}
        checked={props.seachByGender === "unknown"}
      />
    </>
  );
};

export default FilterByGender;

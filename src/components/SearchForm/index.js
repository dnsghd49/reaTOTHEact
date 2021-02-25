import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form>
      <div className="form-group" style={{ display: 'flex' }}>
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit}>
          Search
        </button>
        <button onClick={props.refreshPage}>
          Reset
        </button>
        {/* <br /> */}
      </div>
    </form>
  );
}

export default SearchForm;

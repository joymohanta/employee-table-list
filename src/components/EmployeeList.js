import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json.slice(0, 6));
      });
  }, []);

  function search(rows) {
    return rows.filter(
      (row) =>
        row.first_name.toLowerCase().indexOf(query) > -1 ||
        row.last_name.toLowerCase().indexOf(query) > -1 ||
        row.address.toLowerCase().indexOf(query) > -1
    );
  }

  return (
    <div>
      <div className="search-field">
        <label>Search or Filter: </label>
        <input
          className="input-field"
          type="text"
          placeholder=" Name/Address"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div>
        <DataTable data={search(data)}></DataTable>
      </div>
      <div>
        <h3 className="footer">Click any Id to see the details !!</h3>
      </div>
    </div>
  );
};

export default EmployeeList;

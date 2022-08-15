import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";

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
      <h1>Employee Table !!</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div>
        <DataTable data={search(data)}></DataTable>
      </div>
    </div>
  );
};

export default EmployeeList;

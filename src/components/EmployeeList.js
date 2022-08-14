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
        console.log(json.slice(0, 10));
      });
  }, []);

  return (
    <div>
      <h3>Table list</h3>
      <div>filter goes here</div>
      <div>
        <DataTable data={data}></DataTable>
      </div>
    </div>
  );
};

export default EmployeeList;

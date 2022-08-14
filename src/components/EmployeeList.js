import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";

const EmployeeList = () => {
  const [data, setData] = useState([]);

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

  return (
    <div>
      <h1>Employee Table !!</h1>
      <div>filter will come here</div>
      <div>
        <DataTable data={data}></DataTable>
      </div>
    </div>
  );
};

export default EmployeeList;

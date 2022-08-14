import React from "react";
import "./DataTable.css";

const DataTable = ({ data }) => {
  const columns = [
    "Id",
    "First Name",
    "Last Name",
    "Date of Birth",
    "Address",
    "Date of Joining",
    "Salary",
    "Designation",
  ];
  return (
    <div className="table-size">
      <div>
        <table border={1} cellPadding={10} cellSpacing={30}>
          <thead>
            <tr>
              {columns.map((heading) => (
                <th> {heading} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 10).map((item) => (
              <tr>
                <button>
                  <td> {item.id} </td>
                </button>
                <td> {item.first_name} </td>
                <td> {item.last_name} </td>
                <td> {item.date_of_birth} </td>
                <td> {item.address} </td>
                <td> {item.date_of_joining} </td>
                <td> {item.salary} </td>
                <td> {item.designation} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;

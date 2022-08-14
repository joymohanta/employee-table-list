import React from "react";
import "./DataTable.css";
import { useNavigate } from "react-router-dom";

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
  const { first_name } = data;
  const navigate = useNavigate();
  const navigateToDetail = (first_name) => {
    navigate(`/${first_name}`);
    console.log(first_name);
  };

  return (
    <div className="table-size">
      <div>
        <table border={1} cellPadding={5} cellSpacing={20}>
          <thead>
            <tr>
              {columns.map((heading) => (
                <th> {heading} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 6).map((item) => (
              <tr>
                <td>
                  <button
                    onClick={() =>
                      navigateToDetail(item.first_name.toLowerCase())
                    }
                    className="btn"
                  >
                    {item.id}
                  </button>
                </td>

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

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
  const { id } = data;
  const navigate = useNavigate();
  const navigateToDetail = (id) => {
    navigate(`/detail/${id}`);
    console.log(id);
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
            {data.slice(0, 10).map((item) => (
              <tr>
                <td>
                  <button
                    onClick={() => navigateToDetail(item.id)}
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

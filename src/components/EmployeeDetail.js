import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EmployeeDetail.css";

const EmployeeDetail = () => {
  const { first_name } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const url = `https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/${first_name}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h2>This is detail page</h2>
      <div className="details">
        <table border={1} cellPadding={10} cellSpacing={15}>
          <thead></thead>
          <tbody>
            {item.map((singleItem) => (
              <div>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>First Name</td>
                  <td> {singleItem.first_name} </td>
                </tr>

                <tr>
                  <td>Last Name</td>
                  <td> {singleItem.last_name} </td>
                </tr>
                <tr>
                  <td>Date of Birth</td>
                  <td> {singleItem.date_of_birth} </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td> {singleItem.address} </td>
                </tr>
                <tr>
                  <td>Date of Joining</td>
                  <td> {singleItem.date_of_joining} </td>
                </tr>
                <tr>
                  <td>Salary</td>
                  <td> {singleItem.salary} </td>
                </tr>
                <tr>
                  <td>Designation</td>
                  <td> {singleItem.designation} </td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDetail;

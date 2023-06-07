import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const ViewRecent = () => {
  const [order, set] = useState([{}]);

  const options = {
    url: "http://localhost:3001/api/delivered",
    method: "POST",
  };
  useEffect(() => {
    axios(options)
      .then((response) => {
        const a = response.data;
        console.log(a);
        set(a);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 0);

  function Show(obj) {
    return (
      <Row
        Name={obj.Name}
        TableNo={obj.TableNo}
        bill={obj.bill}
        Dish={obj.Dish}
        Status={obj.Status}
      />
    );
  }

  return (
    <>
      <h1 id="title" data-testid="id1">
        Waiter History
      </h1>
      <div className="box">
        <table className="table table-dark table-striped">
          <thead>
            <th data-testid="id2">Name</th>
            <th>Table#</th>
            <th>Bill</th>
            <th>Dish</th>
            <th>Status</th>
          </thead>

          <tbody>{order.map(Show)}</tbody>
        </table>
      </div>
    </>
  );
};

const Row = (props) => {
  return (
    <>
      <tr>
        <td>{props.Name}</td>
        <td>{props.TableNo}</td>
        <td>{props.bill}</td>
        <td>{props.Dish}</td>
        <td>{"Delivered"}</td>
      </tr>
    </>
  );
};

export default ViewRecent;

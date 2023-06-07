import React, { useEffect } from "react";
import "./vieworders.css";
import axios from "axios";
import { useState } from "react";

const ViewOrders = () => {
  const [order, set] = useState([{}]);
  const options = {
    url: "http://localhost:3001/api/OrderList",
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
  });

  function Show(obj) {
    return (
      <Row
        Name={obj.Name}
        Address={obj.Address}
        phone={obj.phone}
        bill={obj.bill}
        Dish={obj.Dish}
        Status={obj.Status}
      />
    );
  }

  return (
    <>
      <h1 id="title">Rider Panel</h1>
      <div className="box">
        <table className="table table-striped">
          <thead>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Bill</th>
            <th>Dish</th>
            <th>Status</th>
            <th>Cancel</th>
            <th>Accept</th>
          </thead>

          <tbody>{order.map(Show)}</tbody>
        </table>
      </div>
    </>
  );
};

const Row = (props) => {
  const cancelHandel = () => {
    const request = {
      url: "http://localhost:3001/api/cancelOrder",
      method: "POST",
      data: props,
    };

    axios(request)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const acceptHandel = () => {
    const request = {
      url: "http://localhost:3001/api/acceptOrder",
      method: "POST",
      data: props,
    };

    axios(request)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <tr>
        <td>{props.Name}</td>
        <td>{props.Address}</td>
        <td>{props.phone}</td>
        <td>{props.bill}</td>
        <td>{props.Dish}</td>
        <td>{props.Status}</td>
        <td>
          <button className="cancelbutt" onClick={cancelHandel}>
            Cancel
          </button>
        </td>
        <td>
          <button className="acceptbutt" onClick={acceptHandel}>
            Accept
          </button>
        </td>
      </tr>
    </>
  );
};

export default ViewOrders;

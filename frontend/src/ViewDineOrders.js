import React, { useEffect } from "react";
import "./vieworders.css";
import axios from "axios";
import { useState } from "react";

const ViewDineOrders = () => {
  const [order, set] = useState([{}]);
  const options = {
    url: "http://localhost:3001/api/DineOrderList",
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
        TableNo={obj.TableNo}
        bill={obj.bill}
        Dish={obj.Dish}
        Status={obj.Status}
      />
    );
  }

  return (
    <>
      <h1 id="title">Waiter Pannel</h1>
      <div className="box">
        <table className="table table-dark table-striped" data-testid="id3">
          <thead>
            <th>Name</th>
            <th>Table#</th>
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
        <td>{props.TableNo}</td>
        <td>{props.bill}</td>
        <td>{props.Dish}</td>
        <td>{props.Status}</td>
        <td>
          <button
            className="cancelbutt"
            data-testid="id4"
            onClick={cancelHandel}
          >
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

export default ViewDineOrders;

import React, { useEffect } from "react";
import "./vieworders.css";
import axios from "axios";
import { useState } from "react";

const ViewDineOrders = () => {
  const [orders, setOrders] = useState([]);

  const options = {
    url: "http://localhost:3001/api/DineOrderList",
    method: "POST",
  };

  useEffect(() => {
    axios(options)
      .then((response) => {
        const a = response.data;
        console.log(a);
        setOrders(a);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Show(obj) {
    return (
      <Row
        key={obj.id}
        order={obj}
        onCancel={cancelOrder}
        onAccept={acceptOrder}
      />
    );
  }

const cancelOrder = (order) => {
  const updatedOrders = [...orders]; // Create a copy of the orders array

  const orderIndex = updatedOrders.findIndex((o) => o.id === order.id); // Find the index of the order to be canceled

  if (orderIndex !== -1) {
    updatedOrders[orderIndex].Status = "cancel"; // Update the status of the specific order
  }

  const request = {
    url: "http://localhost:3001/api/cancelOrder",
    method: "POST",
    data: order,
  };

  axios(request)
    .then((response) => {
      console.log(response);
      setOrders(updatedOrders);
    })
    .catch((err) => {
      console.log(err);
    });
};

const acceptOrder = (order) => {
  const updatedOrders = [...orders]; // Create a copy of the orders array

  const orderIndex = updatedOrders.findIndex((o) => o.id === order.id); // Find the index of the order to be accepted

  if (orderIndex !== -1) {
    updatedOrders[orderIndex].Status = "accepted"; // Update the status of the specific order
  }

  const request = {
    url: "http://localhost:3001/api/acceptOrder",
    method: "POST",
    data: order,
  };

  axios(request)
    .then((response) => {
      console.log(response);
      setOrders(updatedOrders);
    })
    .catch((err) => {
      console.log(err);
    });
};


  return (
    <>
      <h1 id="title">Waiter Panel</h1>
      <div className="box">
        <table className="table table-dark table-striped" data-testid="id3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Table#</th>
              <th>Bill</th>
              <th>Dish</th>
              <th>Status</th>
              <th>Cancel</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>{orders.map(Show)}</tbody>
        </table>
      </div>
    </>
  );
};

const Row = ({ order, onCancel, onAccept }) => {
  const { id, Name, TableNo, bill, Dish, Status } = order;
  const [orderStatus, setOrderStatus] = useState('');

  const cancelHandel = () => {
    const updatedStatus = 'cancel'; // Set the status to 'cancel' when cancel button is clicked
    setOrderStatus(updatedStatus);
    onCancel(order, updatedStatus);
  };

  const acceptHandel = () => {
    const updatedStatus = 'accepted'; // Set the status to 'accepted' when accept button is clicked
    setOrderStatus(updatedStatus);
    onAccept(order, updatedStatus);
  };

  return (
    <tr>
      <td>{Name}</td>
      <td>{TableNo}</td>
      <td>{bill}</td>
      <td>{Dish}</td>
      <td>{orderStatus}</td>
      <td>
        <button className="cancelbutt" data-testid="id4" onClick={cancelHandel}>
          Cancel
        </button>
      </td>
      <td>
        <button className="acceptbutt" onClick={acceptHandel}>
          Accept
        </button>
      </td>
    </tr>
  );
};


export default ViewDineOrders;

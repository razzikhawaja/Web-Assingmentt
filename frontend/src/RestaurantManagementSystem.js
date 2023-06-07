import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/OrderList')
     .then(response => {
        setOrders(response.data);
      })
     .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCancelOrder = (order) => {
    axios.post('/api/cancelOrder', { Name: order.Name })
     .then(response => {
        console.log(response);
        setOrders(orders.filter(o => o.Name!== order.Name));
      })
     .catch(error => {
        console.log(error);
      });
  };

  const handleAcceptOrder = (order) => {
    axios.post('/api/acceptOrder', { Name: order.Name })
     .then(response => {
        console.log(response);
        setOrders(orders.filter(o => o.Name!== order.Name));
      })
     .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map(order => (
          <li key={order.Name}>
            {order.Name} - {order.Dish} - {order.Status}
            <button onClick={() => handleCancelOrder(order)}>Cancel</button>
            <button onClick={() => handleAcceptOrder(order)}>Accept</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DineOrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/DineOrderList')
     .then(response => {
        setOrders(response.data);
      })
     .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCancelOrder = (order) => {
    axios.post('/api/cancelOrder', { Name: order.Name })
     .then(response => {
        console.log(response);
        setOrders(orders.filter(o => o.Name!== order.Name));
      })
     .catch(error => {
        console.log(error);
      });
  };

  const handleAcceptOrder = (order) => {
    axios.post('/api/acceptOrder', { Name: order.Name })
     .then(response => {
        console.log(response);
        setOrders(orders.filter(o => o.Name!== order.Name));
      })
     .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Dine Order List</h1>
      <ul>
        {orders.map(order => (
          <li key={order.Name}>
            {order.Name} - {order.Dish} - {order.Status}
            <button onClick={() => handleCancelOrder(order)}>Cancel</button>
            <button onClick={() => handleAcceptOrder(order)}>Accept</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RestaurantManagementSystem() {
  return (
    <div>
      <OrderList />
      <DineOrderList />
    </div>
  );
}

export default RestaurantManagementSystem;
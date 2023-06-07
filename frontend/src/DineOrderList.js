import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DineOrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/dine-orders')
    .then(response => {
        setOrders(response.data);
      })
    .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCancelOrder = (order) => {
    axios.post('/api/cancel-order', { id: order.id })
    .then(response => {
        console.log(response);
        setOrders(orders.filter(o => o.id!== order.id));
      })
    .catch(error => {
        console.log(error);
      });
  };

  const handleAcceptOrder = (order) => {
    axios.post('/api/accept-order', { id: order.id })
    .then(response => {
        console.log(response);
        setOrders(orders.filter(o => o.id!== order.id));
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
          <li key={order.id}>
            {order.name} - {order.total}
            <button onClick={() => handleCancelOrder(order)}>Cancel</button>
            <button onClick={() => handleAcceptOrder(order)}>Accept</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DineOrderList;
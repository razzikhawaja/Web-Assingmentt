import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
    .then(response => {
        setOrders(response.data);
      })
    .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.name} - {order.total}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
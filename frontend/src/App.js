import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantManagementSystem from './RestaurantManagementSystem';
import OrderList from './OrderList';
import DineOrderList from './DineOrderList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<RestaurantManagementSystem />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/dine-orders" element={<DineOrderList />} />
      </Switch>
    </Router>
  );
}

export default App;
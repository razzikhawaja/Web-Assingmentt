import React from 'react';
import ViewDineOrders from './ViewDineOrders';
import ViewHistory from './ViewHistory';
import ViewOrders from './ViewOrders';
import ViewRecent from './ViewRecent';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
   <>
   <Header/>
   <ViewDineOrders/>
   <ViewHistory/>
   <ViewOrders/>
   <ViewRecent/>
   <Footer/>
   </>
  );
}

export default App;
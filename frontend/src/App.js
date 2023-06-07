import React from 'react';
import ViewDineOrders from './ViewDineOrders';
import ViewHistory from './ViewHistory';
import ViewOrders from './ViewOrders';
import ViewRecent from './ViewRecent';

function App() {
  return (
   <>
   <h1 style={{textAlign: "center"}}>FAST Restaurant</h1>
   <ViewDineOrders/>
   <ViewHistory/>
   <ViewOrders/>
   <ViewRecent/>
   </>
  );
}

export default App;
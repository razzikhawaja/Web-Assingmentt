const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//-------------------------------------------------------------

const Order = require("./Models/OrderSchema");
const Dine = require("./Models/DineIn"); 

//-------------------------------------------------------------

let url =
  "mongodb+srv://areeb:12345@cluster0.hcn5lr8.mongodb.net/";

mongoose
  .connect(url)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => {
    console.log("Something went Wrong while Connecting to Database");
  });


const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//rider
app.post("/api/OrderList", async (req, res) => {
  const result = await Order.find({}, { _id: 0 })
    .then((response) => {
      console.log("aaa", response);
      res.send(response);
    })
    .catch({ message: "error" });
});

app.post("/api/cancelOrder", async (req, res) => {
  await Order.updateOne({ Name: req.body.Name }, { Status: "Cancelled" })
    .then((response) => {
      console.log(response);
      res.send({ unblocked: response.modifiedCount });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/api/acceptOrder", async (req, res) => {
  await Order.updateOne({ Name: req.body.Name }, { Status: "Accepted" })
    .then((response) => {
      console.log(response);
      res.send({ unblocked: response.modifiedCount });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/api/delivered", async (req, res) => {
  const result = await Order.find({ Status: "Accepted" }, { _id: 1 })
    .then((response) => {
      console.log("aaa", response);
      res.send(response);
    })
    .catch({ message: "error" });
});


// waiter

app.post("/api/DineOrderList", async (req, res) => {
    console.log("jhahah");
    const result = await Dine.find({}, { _id: 1 })
      .then((response) => {
        console.log(response);
        res.send(response);
      })
      .catch({ message: "error" });
  });
  
  app.post("/api/cancelOrder", async (req, res) => {
    await Dine.updateOne({ Name: req.body.Name }, { Status: "Cancelled" })
      .then((response) => {
        console.log(response);
        res.send({ status: response.modifiedCount });
      })
      .catch((err) => {
        res.send(err);
      });
  });
  
  app.post("/api/acceptOrder", async (req, res) => {
    await Dine.updateOne({ Name: req.body.Name }, { Status: "Accepted" })
      .then((response) => {
        console.log(response);
        res.send({ status: response.modifiedCount });
      })
      .catch((err) => {
        res.send(err);
      });
  });
  
  app.post("/api/delivered", async (req, res) => {
    const result = await Dine.find({ Status: "Accepted" }, { _id: 0 })
      .then((response) => {
        console.log("aaa", response);
        res.send(response);
      })
      .catch({ message: "error" });
  });
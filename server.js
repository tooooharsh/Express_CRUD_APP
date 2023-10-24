const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5002;

app.listen(port, ()=>{
   console.log(`server is listening to PORT ${port}`);
});

// app.get("/api/contacts", (req, res)=>{
//     res.status(200).json({message: "Get all contacts"});
// })
app.use(express.json());
app.use("/api/contacts", require("./routes/contactsRoutes"));
app.use(errorHandler);
app.use(express.json());
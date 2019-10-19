const express = require("express");
const App = express();
const connectedDB = require('./config/db');

connectedDB();

//init middleware

App.use(express.json({extended:false}));

const PORT = process.env.PORT || 8000;

App.listen(PORT,()=>{
console.log(`connected to servers ${PORT}`);
})
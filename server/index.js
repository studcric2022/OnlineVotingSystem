require('dotenv').config();
const express = require('express');

const handle =require('./handlers');
const cors = require('cors');
const port=process.env.PORT;
const bodyParser=require('body-parser');
const app= express();
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>
   res.json({hello:'worlds contributed by sumit---'})
);
app.use(handle.notFound);
app.use(handle.errors);

app.listen(port,console.log('Server is running on 5000'));

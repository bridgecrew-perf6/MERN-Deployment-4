const express = require('express');
const cors = require('cors') // This is new
const app = express();
require('./server/config/mongoose.config'); // This is new
app.use(cors()) // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
const port = 8000;
require('./server/routes/pet.routes')(app); // This is new
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
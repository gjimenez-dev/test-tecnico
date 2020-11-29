const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const filePath = path.join(__dirname, '/app/views/');

const app = express();

app.use(express.static(filePath));

var corsOptions = {
  origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');

db.sequelize.sync();

app.get('/', (req, res, next) => { 
  res.sendFile(filePath + 'index.html'); 
});

require('./app/routes/contactinfo.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
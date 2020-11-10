require('dotenv').config();
const port = process.env.PORT || 3000;

const express = require('express');
const routes = require('./routes');

require('./database/index');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port);
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
const path = require('path');

const app = express()
const port = 5003;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.dirname(require.main.filename) + '/statics'));

const spnAPIs = require('./routes/spnPanelRout');

app.use('/api/spn', spnAPIs);

app.listen(port, () => console.log(`Server Running on port ${port}`))
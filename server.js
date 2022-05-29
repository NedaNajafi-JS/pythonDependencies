const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const path = require('path');

const app = express()
const port = process.env.PORT || 5003;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.dirname(require.main.filename) + '/statics'));

const spnAPIs = require('./routes/spnPanelRout');

app.use('/api', spnAPIs);

app.listen(port, () => console.log(`Server Running on port ${port}`))

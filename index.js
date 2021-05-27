const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {});

app.listen(process.env.PORT, () => console.log('Server Up and Running'));

const express = require('express');

const app = express();

app.get('/', (req, res) => {});

app.listen(4000, () => console.log('Server Up and Running'));

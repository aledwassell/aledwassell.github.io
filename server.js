const express = require('express');
const app = express();
let http = require('http');
let fs = require('fs');
let path = require('path');
let port = process.env.PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`listening on port: ${port}`));
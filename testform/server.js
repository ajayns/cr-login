const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.post('/', function(req, res, next) {
  console.log(req.body);
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));

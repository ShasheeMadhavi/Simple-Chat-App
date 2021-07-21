require('dotenv').config();
const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);

app.use([
    cors(),
    express.static('uploads'),
    bodyparser.json(),
    bodyparser.urlencoded({extended: false}),
])

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
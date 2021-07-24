require('dotenv').config();
const express = require('express');
const http = require('http');
// const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
const Routes = require('./app/routes');

const corsOptions = {
    origin: 'http://localhost:3000',
    Credentials: true,
    OptionSuccessStates: 200
}

app.use([
    cors(corsOptions),
    express.static('uploads'),
    express.json(),
    express.urlencoded({extended: true}),
    Routes
]);

const io = (module.exports.io = require("socket.io")(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods : ["GET", "POST"]
    }
}));
const socketManager = require('./app/socketManager/socketManager');
io.on("connection", socketManager);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
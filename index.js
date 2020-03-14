const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const server = http.Server(app);

const io =  require('./socket').init(server);

const userRoutes = require('./routes/user');

const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`);

const port = 8888 || 3000;

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
    socket.on('new-message', (message) => {
        if (message) {
            console.log('-----',  message);
            io.emit('new-message', message);
        }
    })
});

// console.log(app.locals);

app.use('/user', userRoutes);

server.listen(port, () => {
    console.log(`started on port: ${port}`)
});

// app.locals.io = io;

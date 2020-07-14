const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
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
app.use(cors());
const server = http.Server(app);

const io =  require('./socket').init(server);

const userRoutes = require('./routes/user');
const chatRoutes = require('./routes/chat');


const port = 8888;
console.log(`Your port is ${port}`);
app.use(express.static('public'));


io.on('connection', (socket) => {
    // console.log('user connected', socket.id);
    socket.on('new-message', (message) => {
        if (message) {
            console.log('-----',  message);
            io.emit('new-message', message);
        }
    })
});

// console.log(app.locals);
console.log('aaaa');
app.use('/user', userRoutes);
app.use('/chat', chatRoutes);

server.listen(port, () => {
    console.log(`started on port: ${port}`)
});

// app.locals.io = io;

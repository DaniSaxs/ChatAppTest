const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(server);

io.on('connection', (socket) => {
    // console.log('An User has been connected!');
    // socket.on('disconnect', () => {
    //     console.log('User Disconnected!');
    // });
    socket.on('chat', msg => {
        // console.log(msg);
        io.emit('chat', msg);
    });
});

app.use(express.static('node_modules'));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
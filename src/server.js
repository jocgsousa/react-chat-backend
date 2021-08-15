import app from './app';
import {createServer} from 'http';
import { Server } from 'socket.io';
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
});

io.on('connection', socket => {
    console.log(`User connect ${socket.id}`);

    socket.on('addUser', data => {
        console.log(data);

        socket.broadcast.emit('receivedMessage', {
            title: 'Novo usuário',
            text: `${data.user} entrou no grupo!`
        });

    });


    socket.on('sendMessage', data => {
        console.log(data);

        socket.broadcast.emit('receivedMessage', {
            title: data.title,
            text: data.text
        });
        
    });


    
});



server.listen(3333);
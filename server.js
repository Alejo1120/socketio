const express = require('express'); 
const app = express(); 
const cors = require('cors');
const path = require('path');


//setting
app.set('port', process.env.PORT || 3000); 

//arch statics
app.use(express.static(path.join(__dirname , 'public')))

//server init
const server = app.listen(app.get('port'),() =>{ 
    console.log('servidor en port :' ,app.get(`port`));
});

const SocketIO = require('socket.io');   //SOCKET
const io = SocketIO(server); //recive server
  
//web sockets
io.on('connection', (socket)=>{        //cuando se conecte alguien (connection es importante)
    console.log('conexion nueva', socket.id);

    socket.on('chat', (data)=>{           //con esta funcion enviamos el mensje
        io.sockets.emit('chat', data)  
        });

        socket.on('chat:escribiendo', (data)=>{
            console.log(data);
        
        })

});
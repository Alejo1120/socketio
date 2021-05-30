 // con io() se escucha al cliente conectar url de la pg en este caso la de heroku 
const socket = io() ;

//datos del form
let mensaje = document.getElementById('mensaje');
let user = document.getElementById('user');
let send = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');


btn.addEventListener('click', function (){           //almacenamos los mensajes en un obj y los envio al server
    socket.emit('chat',{  //emite
        user: user.value,
        mensaje:mensaje.value      
    });

    console.log({
        user: user.value,
        mensaje:mensaje.value
    });
});

socket.on('chat', function (data){
    console.log(data);
    // output.innerHTML= -`<p>
    // <strong>${data.user} </strong> 
    // </p>`
}); //recibe
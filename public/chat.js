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

    //  console.log({                //se muestra por la consola
    //     user: user.value,
    //      mensaje:mensaje.value
    // });
});

mensaje.addEventListener('Keypress',function (){      //para que aparezca que el usuario esta escribiendo 
    socket.emit('chat:escribiendo', user.value );
});

socket.on('chat', function (data){           //aparezcan los mensajes en la parte del front-end
    //console.log(data);
     actions.innerHTML = '';
     output.innerHTML += `<p>
     <strong>${data.user} </strong>:  ${data.mensaje}
     </p>`
}); //recibe

socket.on('chat:escribiendo', function (data){       //aparezca el escribiendo 
    actions.innerHTML = `<p><em>${data} esta escribiendo...</em></p>`
});
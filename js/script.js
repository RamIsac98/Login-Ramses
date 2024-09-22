const email = document.querySelector('#email');
const password = document.querySelector('#password');
const formulario = document.querySelector('.formulario');
const datos = {
    
    email: '',
    password: ''
}



formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    console.log(datos);

    const { password, email } = datos;

    if(password === '' || email === '' ) {
        console.log('Error de iniciar seccion!');
        mostrarError('Todos los campos deben estar llenos');
        return;
    }

    mostrarMensaje('Datos completos');
});

function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('error');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);

}

function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}


email.addEventListener('input', leerTexto);
password.addEventListener('input', leerTexto);

function leerTexto(evento) {
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}




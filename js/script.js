//cada vez que ingreso a la pagina debe sumar 1 visita
//esa info de la cantidad de veces tiene que almacenarse localstorage
//crear un evento click con el localStore.clear para reiniciar a cero.
//capturar el <span id="contadorVisitas">0</span> para ponerle la funcion suma y que innerhtml se refleje ahi
//Capurar el boton para el evento.


function contadorVisitas() {
let visitas = localStorage.getItem('visitas');
if (!visitas) {
    visitas = 0;
} else {
    visitas = parseInt(visitas);
}
visitas += 1;
localStorage.setItem('visitas', visitas);
document.getElementById("contadorVisitas").innerHTML = `visitas: ${visitas}`;
}

contadorVisitas();

const button = document.getElementById("btnReestablecer");
let contador = document.getElementById("contadorVisitas");
button.addEventListener('click', () => {
 localStorage.clear();
 contador.innerHTML= 'visitas: 0';
});


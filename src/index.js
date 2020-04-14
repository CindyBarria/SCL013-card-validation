// Ocultar todo al cargar pagina
document.getElementById("Portada").style.display = 'block';
document.getElementById("Validador").style.display = 'none';
document.getElementById("TarjetaValida").style.display = 'none';
document.getElementById("TarjetaNoValida").style.display = 'none';
//variables
let nombre= document.getElementById ("wname");
let selector= document.getElementById ("selector");

//funcion y condicion para cambiar de pagina y traer nombre
var botonSiguiente = document.getElementById("next");
botonSiguiente.addEventListener ("click", siguiente);
function siguiente() {
// condicion si tiene menos de 0 letras dara un alerta
if (nombre.value.length > 0 && selector.value.length > 0){
var usuario= document.getElementById("wname").value;
document.getElementById("names").innerHTML="Bienvenid@ "+ usuario;
//ocultar y mostrar
  document.getElementById("Portada").style.display = 'none';
  document.getElementById("Validador").style.display='block';
 }
else{
   alert( "Ingrese los datos por favor")
    }
}

var botonVolver = document.getElementById("volveralinicio");
botonVolver.addEventListener ("click", reload);
// Funciones para cambiar y refrescar pagina
function reload() {
  document.getElementById("TarjetaValida").style.display = 'none';
  document.getElementById("Portada").style.display='block';
}

var botonVolverInicio = document.getElementById("volver");
botonVolverInicio.addEventListener ("click", volver);
function volver() {
  document.getElementById("TarjetaNoValida").style.display = 'none';
  document.getElementById("Portada").style.display='block';
}

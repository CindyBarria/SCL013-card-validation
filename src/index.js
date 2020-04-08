
// Ocultar todo al cargar pagina
document.getElementById("Portada").style.display = 'block';
document.getElementById("Validador").style.display = 'none';
document.getElementById("TarjetaValida").style.display = 'none';
document.getElementById("TarjetaNoValida").style.display = 'none';
//variables
let nombre= document.getElementById ("wname");
let correo= document.getElementById ("email");

//funcion y condicion para cambiar de pagina y traer nombre

function siguiente() {
// condicion si tiene menos de 0 letras dara un alerta 
if (nombre.value.length > 0 && correo.value.length > 0){ 
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

// Funciones para cambiar y refrescar pagina
function reload() {
  document.getElementById("TarjetaValida").style.display = 'none';
  document.getElementById("Portada").style.display='block';

};

function reload() {
  document.getElementById("TarjetaNoValida").style.display = 'none';
  document.getElementById("Portada").style.display='block';
};



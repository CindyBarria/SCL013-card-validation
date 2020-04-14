let botonValidar = document.getElementById("validar");
botonValidar.addEventListener ("click", isValidCard);
botonValidar.addEventListener ("click", maskify);

function isValidCard() {
  //variables para evaluar numero ingresado y crear primer array
  let numero = document.getElementById("numberCard").value;
  let cadena = (numero.split("")).reverse();
  let cadenaTotal = []; // Todos los numeros pares e impares
  let mayoresDiez = [];
  let menoresDiez = [];

  // for para separar numeros por posicion y multiplicar los numero en posicion par por 2
for (let i=0; i < cadena.length; i++) {
  let valor = parseInt (cadena[i]); //cadena number
  if (i % 2 == 0) {
  let resultadoImpar = valor
  cadenaTotal.push(resultadoImpar);

  } //valores impar
  else {
  let resultadoPar = valor*2
  cadenaTotal.push(resultadoPar);
  } //posiciones pares multiplicadas por 2
}
//cadena de numeros menos a diez
 for (let i = 0; i<cadenaTotal.length; i++) {
  let resp = cadenaTotal[i];
  if (resp < 10) {
  menoresDiez.push(resp)
 }
}
  //Cadena de numeros mayores a diez
for (let i = 0; i<cadenaTotal.length; i++) {
  let res = cadenaTotal[i];
  if (res >= 10) {
  mayoresDiez.push(res)
 }
}
//separar numeros mayores a 10
 let mayorSeparados = [];
 let digitos = mayoresDiez.toString().replace(/,/g, "");
for (let i = 0; i < digitos.length ; i++) {
  mayorSeparados.push(parseInt(digitos.charAt(i)));
}
//suma de digitos entre numeros mayores y menores a diez
 let arrayFinal = menoresDiez.concat(mayorSeparados);
 let total = arrayFinal.reduce((a, b) => a + b, 0);
// Condicion si el residuo es igual a 0 muestra mensaje de Validado con exito , sino muestra mensaje de tarjeta no validada
if (total % 10 === 0) {
document.getElementById("Validador").style.display = 'none';
document.getElementById("TarjetaValida").style.display = 'block';
}
else {
  document.getElementById("Validador").style.display = 'none';
document.getElementById("TarjetaNoValida").style.display='block';
}
}
// GATOS GATOS GATOS
function maskify() {
 //variables para evaluar numero ingresado y traer los ultimos 4 digitos
  let numero = document.getElementById("numberCard").value;
  let output = '';
  let lastFour = numero.slice(-4, numero.length);
  //condicion si ingresa un numero menor a 4 entregara solo el numero sino se mostrara el umero mas los ultimos cuatro numeros
   if (numero.length < 4){
     return(numero)
   }
   else {
  for (let i = 0; i < numero.length -4; i++) {
    output += '#';
    var mascara = output + lastFour
  }
  }
    document.getElementById("tvalida").innerHTML="Felicidades! tu tarjeta N° " + mascara + " es Valida"
    document.getElementById("tNovalida").innerHTML="Tu tarjeta N° " + mascara + " NO es Valida";
}

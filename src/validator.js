
function isValidCard() {
  //variables para evaluar numero ingresado y crear primer array
  var numero = document.getElementById("numberCard").value;
  var cadena = (numero.split("")).reverse();
  console.log (cadena)
  var cadenaTotal = []; // Todos los numeros pares e impares
  var mayoresDiez = [];
  var menoresDiez = [];
 
  // for para separar numeros por posicion y multiplicar los numero en posicion par por 2
for (i=0; i < cadena.length; i++) {
  let valor = parseInt (cadena[i]); //cadena number
  if (i % 2 == 0) {
  var resultado = valor  
  console.log ("impar i="+ i + " valor=" + valor );
  } //valores impar 
  else {
  var resultado = valor*2  
  console.log ("pares i="+ i + " valor=" + resultado)
  } //posiciones pares multiplicadas por 2 
  cadenaTotal.push(resultado);
};
  console.log(cadenaTotal);

//cadena de numeros menos a diez

 for (let i = 0; i<cadenaTotal.length; i++) {
  var resp = cadenaTotal[i];
  if (resp < 10) {
  menoresDiez.push(resp)
 }
}
console.log(menoresDiez)
  //Cadena de numeros mayores a diez
for (let i = 0; i<cadenaTotal.length; i++) {
  var res = cadenaTotal[i];
  if (res >= 10) {
  mayoresDiez.push(res)
 }
}
console.log(mayoresDiez)
//separar numeros mayores a 10 
 var mayorSeparados = [];
 var digitos = mayoresDiez.toString().replace(/,/g, "");
for (i = 0; i < digitos.length ; i++) {
  mayorSeparados.push(parseInt(digitos.charAt(i)));
}
console.log(mayorSeparados)
//sumas finales
 const arrayFinal = menoresDiez.concat(mayorSeparados);
console.log (arrayFinal)
 let total = arrayFinal.reduce((a, b) => a + b, 0);

console.log(total);
// Condicion si el residuo es igual a 0 muestra mensaje de Validado con exito , sino muestra mensaje de tarjeta no validada 
if (total % 10 === 0) {
document.getElementById("Validador").style.display = 'none';
document.getElementById("TarjetaValida").style.display='block';
}  
else {
  document.getElementById("Validador").style.display = 'none';
document.getElementById("TarjetaNoValida").style.display='block';
}

}


//GATOS

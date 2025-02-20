import "../atoms";
import "../molecules";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Validador() {
  const navigate = useNavigate();
  const location = useLocation();
  const { value } = location.state || { value: "" };
  const [cardNumber, setCardNumber] = useState("");
  const [validateNumber, setValidateNumber] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const inputElement = inputRef.current;

    if (inputElement) {
      const handleInputChange = (event) => {
        setCardNumber(event.detail);
      };

      inputElement.addEventListener("input-change", handleInputChange);

      return () => {
        inputElement.removeEventListener("input-change", handleInputChange);
      };
    }
  }, []);

  const cardValidator = () => {
    //variables para evaluar numero ingresado y crear primer array
    let cadena = cardNumber.split("").reverse();
    let cadenaTotal = []; // Todos los numeros pares e impares
    let mayoresDiez = [];
    let menoresDiez = [];

    // for para separar numeros por posicion y multiplicar los numero en posicion par por 2
    for (let i = 0; i < cadena.length; i++) {
      let valor = parseInt(cadena[i]); //cadena number
      if (i % 2 == 0) {
        let resultadoImpar = valor;
        cadenaTotal.push(resultadoImpar);
      } //valores impar
      else {
        let resultadoPar = valor * 2;
        cadenaTotal.push(resultadoPar);
      } //posiciones pares multiplicadas por 2
    }
    //cadena de numeros menos a diez
    for (let i = 0; i < cadenaTotal.length; i++) {
      let resp = cadenaTotal[i];
      if (resp < 10) {
        menoresDiez.push(resp);
      }
    }
    //Cadena de numeros mayores a diez
    for (let i = 0; i < cadenaTotal.length; i++) {
      let res = cadenaTotal[i];
      if (res >= 10) {
        mayoresDiez.push(res);
      }
    }
    //separar numeros mayores a 10
    let mayorSeparados = [];
    let digitos = mayoresDiez.toString().replace(/,/g, "");
    for (let i = 0; i < digitos.length; i++) {
      mayorSeparados.push(parseInt(digitos.charAt(i)));
    }
    //suma de digitos entre numeros mayores y menores a diez
    let arrayFinal = menoresDiez.concat(mayorSeparados);
    let total = arrayFinal.reduce((a, b) => a + b, 0);
    setValidateNumber(total);
  };

  const handleNext = () => {
    cardValidator();
  };

  useEffect(() => {
    if (validateNumber != 0) {
      // Cuando validateNumber se actualiza
      navigate("/response", { state: { validateNumber, cardNumber } });
    }
  }, [validateNumber, cardNumber, navigate]);

  return (
    <div id="Validador">
      <div>
        <simple-text name={`Hola ${value}`} />
        <simple-text name="Ingrese N° de la tarjeta" />
        <input-text
          ref={inputRef}
          placeholder="1111-2222-3333-4444"
          inputmode="numeric"
          pattern="[0-9]*"
          maxlength="16"
        />
      </div>
      <button-primary onClick={handleNext} buttonText="Validar" />
    </div>
  );
}

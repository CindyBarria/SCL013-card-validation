import "../atoms";
import "../molecules";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Validador() {
  const navigate = useNavigate();
  const location = useLocation();
  const { value } = location.state || { value: "" };
  const [cardNumber, setCardNumber] = useState(0);
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
    if (!cardNumber) return; // Evita cálculos innecesarios si el campo está vacío

    let cadena = cardNumber.split("").reverse().map(Number);

    let processedNumbers = cadena.map((num, index) =>
      index % 2 === 0 ? num : num * 2
    );

    let total = processedNumbers
      .flatMap((num) => (num >= 10 ? [Math.floor(num / 10), num % 10] : num))
      .reduce((sum, num) => sum + num, 0);

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

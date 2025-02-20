import "../atoms";
import "../molecules";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Validador() {
  const navigate = useNavigate();
  const location = useLocation();
  const { value } = location.state || { value: "" };
  const [cardNumber, setCardNumber] = useState("");
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

  const handleNext = () => {
    navigate("/response", { state: { cardNumber } });
  };

  return (
    <div id="Validador">
      <div>
        <simple-text name={`Hola ${value}`} />
        <simple-text name="Ingrese N° de la tarjeta" />
        <input-text ref={inputRef} placeholder="1111-2222-3333-4444" />
      </div>
      <button-primary onClick={handleNext} buttonText="Validar" />
    </div>
  );
}

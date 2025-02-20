import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../atoms";
import "../molecules";

export default function Respuesta() {
  const location = useLocation();
  const { validateNumber, cardNumber } = location.state || {
    validateNumber: null,
    cardNumber: null,
  };

  const [responseText, setResponseText] = useState("");
  const [mask, setMask] = useState("");

  useEffect(() => {
    let output = "";
    let lastFour = cardNumber.slice(-4, cardNumber.length);

    if (cardNumber.length < 4) {
      return cardNumber;
    } else {
      for (let i = 0; i < cardNumber.length - 4; i++) {
        output += "#";
        const mascara = output + lastFour;
        setMask(mascara);
      }
    }
  }, [cardNumber]);

  useEffect(() => {
    if (validateNumber != 0 && mask != null) {
      if (validateNumber % 10 === 0) {
        setResponseText(`Felicidades! tu tarjeta N° ${mask} es valido`);
      } else {
        setResponseText(`Tu tarjeta N° ${mask} NO es valida`);
      }
    }
  }, [validateNumber, mask]);

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/");
  };

  return (
    <div>
      <div id="Portada">
        <simple-text name={responseText} />
        <button-primary onClick={handleNext} buttonText="Volver a inicio" />
      </div>
    </div>
  );
}

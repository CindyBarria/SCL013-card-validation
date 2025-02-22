import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../atoms";
import "../molecules";
import paymentMethod from "../../data/paymentMethod.json";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLElement | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const inputElement = inputRef.current;

    if (inputElement) {
      const handleInputChange = (event: Event) => {
        const customEvent = event as CustomEvent;
        setValue(customEvent.detail); // Captura el valor del Web Component
      };

      inputElement.addEventListener("input-change", handleInputChange);

      return () => {
        inputElement.removeEventListener("input-change", handleInputChange);
      };
    }
  }, []);

  const handleNext = () => {
    navigate("/validate", { state: { value } });
  };

  return (
    <div>
      <div>
  {/*       <simple-text name = "Ingrese nombre"></simple-text> */}
      {React.createElement('simple-text', { name: 'Ingrese nombre' })}
       {/*  <input-text ref={inputRef} placeholder="Ingrese nombre" />
        <select-option options={paymentMethod} /> */}
      </div>
     {/*  <button-primary onClick={handleNext} buttonText="Siguiente" /> */}
    </div>
  );
}

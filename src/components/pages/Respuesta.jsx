import "../atoms";
import "../molecules";
import { useNavigate } from "react-router-dom";

export default function Respuesta() {
  const navigate = useNavigate();
const handleNext = () => {
  navigate("/");
};
    return (
      <div>
        <div id="Portada">
              <p> Respuesta </p>
{/*             <input type="button" id="next" value="Siguiente" /> */}
            <button-primary onClick={handleNext} buttonText="Validar" />
          </div>
      </div>
    );
  }
  
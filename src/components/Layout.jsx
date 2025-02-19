import { Outlet } from "react-router-dom";
import "../styles/index.css";

export default function Layout() {
  return (
    <div className="borde">
      <Outlet /> {/* Aquí se renderiza el contenido dinámico */}
    </div>
  );
}

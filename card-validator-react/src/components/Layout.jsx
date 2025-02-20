import { Outlet } from "react-router-dom";
import "../styles/index.css";
import "../components/molecules";

export default function Layout() {
  return (
    <div className="borde">
      <banner-top alt="logo" />
      <Outlet /> {/* Aquí se renderiza el contenido dinámico */}
    </div>
  );
}

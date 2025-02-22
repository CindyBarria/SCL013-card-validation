import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Validador from "./components/pages/Validador.jsx";
import Respuesta from "./components/pages/Respuesta.jsx";
import Layout from "./components/templates/Layout.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="validate" element={<Validador />} />
          <Route path="response" element={<Respuesta />} />
        </Route>
      </Routes>
    </Router>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import {Validador} from "./pages/Validador.jsx";
import {Respuesta} from "./pages/Respuesta.jsx";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/validator" element={<Validador />} />
          <Route path="/response" element={<Respuesta/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

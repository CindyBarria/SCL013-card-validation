import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import {Validador} from "./pages/Validador.js";
import {Respuesta} from "./pages/Respuesta.js";



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

import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Details from "../EjemploClase/Details";
import Clase4 from "../Clase4/main.tsx"

export default function CelulaRouter() {
  return (
    <HashRouter>
      <Routes>
        {/* ruta principal */}
        <Route path="/" element={<Menu />} />
        {/* segunda pantalla */}
        <Route path="EjemploClase" element={<Details />} />
        {/* cualquier otra ruta, vuelve al menú */}
        <Route path="*" element={<Menu />} />
        {/* ruta para la clase 4 */}
        <Route path="Clase4" element={<Clase4 />} />


      </Routes>
    </HashRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../www/Home/Home";
import Atv01 from "../Atividade1/Atv01";
import Atv02 from "../Atividade2/Atv02";
import Atv03 from "../Atividade3/Atv03";

export default function minhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atv01" element={<Atv01 />} />
        <Route path="/atv02" element={<Atv02 />} />
        <Route path="/atv03" element={<Atv03 />} />
      </Routes>
    </BrowserRouter>
  );
}

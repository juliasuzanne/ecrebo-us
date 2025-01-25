import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Acquire } from "./Pages/Acquire";
import { Digital } from "./Pages/Digital";
import { Engage } from "./Pages/Engage";
import { CPR } from "./CPR";
import { TRM } from "./TRM";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cpr" element={<CPR />} />
          <Route path="/trm" element={<TRM />} />
          <Route path="/acquire" element={<Acquire />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/engage" element={<Engage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

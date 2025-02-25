import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Acquire } from "./Pages/Acquire";
import { Digital } from "./Pages/Digital";
import { Engage } from "./Pages/Engage";
import { CPR } from "./CPR";
import { TRM } from "./TRM";
import { Rx } from "./Pages/Rx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cpr" element={<CPR />} />
          <Route path="/trm" element={<TRM />} />
          <Route path="/cpr/acquire" element={<Acquire />} />
          <Route path="/cpr/digital" element={<Digital />} />
          <Route path="/cpr/engage" element={<Engage />} />
          <Route path="/cpr/rx_link" element={<Rx />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

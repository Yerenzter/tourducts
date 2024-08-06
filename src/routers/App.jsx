import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Belison,
  Hamtic,
  Home,
  Patnongon,
  Sibalom,
  Start,
} from "../components";
import Back from "./Back";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="getting-started" element={<Start />} />

        <Route path="/" element={<Back />}>
          <Route path="hamtic" element={<Hamtic />} />
          <Route path="belison" element={<Belison />} />
          <Route path="sibalom" element={<Sibalom />} />
          <Route path="patnongon" element={<Patnongon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

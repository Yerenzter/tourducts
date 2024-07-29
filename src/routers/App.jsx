import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Attractions,
  Brooms,
  Home,
  LinawBalud,
  Login,
  Products,
  Start,
  Trois,
} from "../components";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/getting-started" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/products/brooms" element={<Brooms />} />
          <Route path="/attractions/trois" element={<Trois />} />
          <Route path="/attractions/linaw-balud" element={<LinawBalud />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

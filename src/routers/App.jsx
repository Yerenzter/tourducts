import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Belison,
  BelisonAttractions,
  BelisonPictures,
  Hamtic,
  HamticAttractions,
  HamticPictures,
  Home,
  Patnongon,
  PatnongonAttractions,
  PatnongonPictures,
  Sibalom,
  SibalomAttractions,
  SibalomPictures,
  SibalomProducts,
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
          <Route path="attractions" element={<HamticAttractions />} />
          <Route path="hamtic/attractions" element={<HamticAttractions />} />
          <Route path="belison/attractions" element={<BelisonAttractions />} />
          <Route path="sibalom/attractions" element={<SibalomAttractions />} />
          <Route
            path="patnongon/attractions"
            element={<PatnongonAttractions />}
          />
          <Route path="sibalom/products" element={<SibalomProducts />} />
          <Route
            path="hamtic/attractions/pictures"
            element={<HamticPictures />}
          />
          <Route
            path="belison/attractions/pictures"
            element={<BelisonPictures />}
          />
          <Route
            path="/sibalom/attractions/pictures"
            element={<SibalomPictures />}
          />
          <Route
            path="/patnongon/attractions/pictures"
            element={<PatnongonPictures />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

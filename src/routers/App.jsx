import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Belison,
  BelisonAttractions,
  Esplanade,
  Hamtic,
  HamticAttractions,
  Home,
  Patnongon,
  PatnongonAttractions,
  QueenElizabeth,
  SanJose,
  SanJoseAttractions,
  Sibalom,
  SibalomAttractions,
  SibalomPictures,
  SibalomProducts,
  StaMonica,
  StaMonicaPictures,
  Start,
  Trois,
  TroisPictures,
  VistaPaloma,
  VistaPalomaPictures,
} from "../components";
import Back from "./Back";
import Patnongonroducts from "../components/Products/PatnongonProducts";

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
          <Route path="san-jose" element={<SanJose />} />
          <Route path="attractions" element={<HamticAttractions />} />
          <Route path="hamtic/attractions" element={<HamticAttractions />} />
          <Route path="belison/attractions" element={<BelisonAttractions />} />
          <Route path="sibalom/attractions" element={<SibalomAttractions />} />
          <Route
            path="patnongon/attractions"
            element={<PatnongonAttractions />}
          />
          <Route path="san-jose/attractions" element={<SanJoseAttractions />} />
          <Route path="hamtic/attractions/sta-monica" element={<StaMonica />} />
          <Route
            path="belison/attractions/vista-paloma"
            element={<VistaPaloma />}
          />
          <Route path="sibalom/products" element={<SibalomProducts />} />
          <Route
            path="hamtic/attractions/sta-monica/pictures"
            element={<StaMonicaPictures />}
          />
          <Route
            path="belison/attractions/vista-paloma/pictures"
            element={<VistaPalomaPictures />}
          />
          <Route
            path="sibalom/attractions/queen-elizabeth"
            element={<QueenElizabeth />}
          />
          <Route
            path="patnongon/attractions/trois-resort"
            element={<Trois />}
          />
          <Route
            path="san-jose/attractions/esplanade"
            element={<Esplanade />}
          />
          <Route
            path="/sibalom/attractions/queen-elizabeth/pictures"
            element={<SibalomPictures />}
          />
          <Route
            path="/patnongon/attractions/trois-resort/pictures"
            element={<TroisPictures />}
          />
          <Route path="/patnongon/products" element={<Patnongonroducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

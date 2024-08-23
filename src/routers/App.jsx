import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Baldone,
  Belison,
  BelisonAttractions,
  BelisonProducts,
  EBJ,
  EBJPictures,
  Esplanade,
  EsplanadePictures,
  Gemstone,
  GemstonePictures,
  Hamtic,
  HamticAttractions,
  HamticProducts,
  HappySunset,
  HappySunsetPictures,
  Home,
  LinawBalud,
  LinawBaludPictures,
  Parangabuhian,
  Patnongon,
  PatnongonAttractions,
  QueenElizabeth,
  SanJose,
  SanJoseAttractions,
  SanJoseProducts,
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
          <Route
            path="belison/attractions/happy-sunset"
            element={<HappySunset />}
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
            path="belison/attractions/happy-sunset/pictures"
            element={<HappySunsetPictures />}
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
            path="patnongon/attractions/linaw-balud"
            element={<LinawBalud />}
          />
          <Route
            path="san-jose/attractions/ebj-freedom-park"
            element={<EBJ />}
          />
          <Route
            path="san-jose/attractions/esplanade"
            element={<Esplanade />}
          />
          <Route
            path="sibalom/attractions/queen-elizabeth/pictures"
            element={<SibalomPictures />}
          />
          <Route
            path="sibalom/products/gemstone/pictures"
            element={<GemstonePictures />}
          />
          <Route
            path="patnongon/attractions/trois-resort/pictures"
            element={<TroisPictures />}
          />
          <Route
            path="patnongon/attractions/linaw-balud/pictures"
            element={<LinawBaludPictures />}
          />
          <Route
            path="san-jose/attractions/esplanade/pictures"
            element={<EsplanadePictures />}
          />
          <Route
            path="san-jose/attractions/ebj-freedom-park/pictures"
            element={<EBJPictures />}
          />

          <Route path="hamtic/products" element={<HamticProducts />} />
          <Route path="belison/products" element={<BelisonProducts />} />
          <Route path="patnongon/products" element={<Patnongonroducts />} />
          <Route path="san-jose/products" element={<SanJoseProducts />} />

          <Route path="sibalom/products/gemstone" element={<Gemstone />} />
          <Route
            path="patnongon/products/parangabuhian"
            element={<Parangabuhian />}
          />
          <Route
            path="san-jose/products/baldone-woodworks"
            element={<Baldone />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

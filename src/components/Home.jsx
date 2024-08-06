import { useEffect } from "react";
import { M } from "../lib";

import Hamtic from "../assets/logo-hamtic.png";
import Belison from "../assets/logo-belison.png";
import Sibalom from "../assets/logo-sibalom.png";
import Patnongon from "../assets/logo-patnongon.png";

export default function Home() {
  useEffect(() => {
    MInit();
  }, []);

  const MInit = async () => {
    await M.Tabs.init(document.querySelectorAll(".tabs"));
  };
  return (
    <>
      <nav className="nav-extended fixed z-30 bottom-0 bg-orange-700">
        <div className="nav-wrapper">
          <nav className="nav-content bg-orange-700">
            <ul className="tabs tabs-transparent flex justify-items-center">
              <li className="tab waves-effect">
                <a href="#home" className="active">
                  <span className="material-icons py-3">home</span>
                </a>
              </li>
              <li className="tab waves-effect">
                <a href="#information">
                  <span className="material-icons py-3">info</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>

      <div id="home" className="col s12 h-screen bg-orange-500 p-10">
        <div className="row">
          <div className="col s9">
            <h1 className="text-white text-5xl">
              <strong>Where would you like to visit?</strong>
              <br />
              <br />
            </h1>
          </div>

          <div className="col s12 text-center">
            <h1 className="text-white text-2xl">
              <strong>MUNICIPALITIES OF ANTIQUE</strong>
            </h1>
          </div>

          <div
            id="item-hamtic"
            className="col s12 item-box relative"
            onClick={() => (window.location.href = "/hamtic")}
          >
            <div className="row items-center item-box p-3 waves-effect waves-light">
              <div className="col s8">
                <h1 className="text-3xl text-white">Municipality of Hamtic</h1>
              </div>
              <div className="col s4">
                <img src={Hamtic} alt="hamtic logo" width={200} height={200} />
              </div>
            </div>
          </div>

          <div
            id="item-belison"
            className="col s12 item-box relative"
            onClick={() => (window.location.href = "/belison")}
          >
            <div className="row items-center item-box p-3 waves-effect waves-light">
              <div className="col s8">
                <h1 className="text-3xl text-white">Municipality of Belison</h1>
              </div>
              <div className="col s4">
                <img src={Belison} alt="hamtic logo" width={200} height={200} />
              </div>
            </div>
          </div>

          <div
            id="item-sibalom"
            className="col s12 item-box relative"
            onClick={() => (window.location.href = "/sibalom")}
          >
            <div className="row items-center item-box p-3 waves-effect waves-light">
              <div className="col s8">
                <h1 className="text-3xl text-white">Municipality of Sibalom</h1>
              </div>
              <div className="col s4">
                <img src={Sibalom} alt="hamtic logo" width={200} height={200} />
              </div>
            </div>
          </div>

          <div
            id="item-patnongon"
            className="col s12 item-box relative"
            onClick={() => (window.location.href = "/patnongon")}
          >
            <div className="row items-center item-box p-3 waves-effect waves-light">
              <div className="col s8">
                <h1 className="text-3xl text-white">
                  Municipality of Patnongon
                </h1>
              </div>
              <div className="col s4">
                <img
                  src={Patnongon}
                  alt="hamtic logo"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="information" className="col s12 h-screen bg-orange-500 p-10">
        Information
      </div>
    </>
  );
}
1;

import { Outlet } from "react-router-dom";
import { M } from "../lib";
import { useEffect } from "react";
import Avatar from '../assets/logo.jpg';

export default function Layout() {
  useEffect(() => {
    MInit();
  }, []);

  const MInit = async () => {
    await M.Sidenav.init(document.querySelectorAll(".sidenav"));
  };

  return (
    <>
      <div className="navbar-fixed">
        <nav className="shadow-none">
          <div className="nav-wrapper bg-blue-700">
            <a
              href="#"
              className="sidenav-trigger show-on-large"
              data-target="menu"
            >
              <i className="material-icons text-white">menu</i>
            </a>
          </div>
        </nav>
      </div>

      <div id="menu" className="sidenav pat-blue row grid content-start">
        <div className="col s12 p-5">
          <img src={Avatar} alt="avatar" width={60} height={60} className="rounded-full mb-5" />
          <h1 className="text-3xl"><strong>Tourducts App</strong></h1>
          <p className="text-justify" style={{letterSpacing: '2px'}}>Tourist Application</p>
        </div>

        <ul className="col s12">
          <li>
            <a href="/" style={{letterSpacing: '3px'}}>Home</a>
          </li>
          <li>
            <a href="/products" style={{letterSpacing: '3px'}}>Products</a>
          </li>
          <li>
            <a href="/attractions" style={{letterSpacing: '3px'}}>Attractions</a>
          </li>
          <li>
            <a href="/about" style={{letterSpacing: '3px'}}>About</a>
          </li>
        </ul>

        <div className="col s12 p-5 grid justify-center absolute z-50 bottom-0 right-0 left-0 ">
          <button className="btn-flat waves-effect text-white">Log Out</button>
        </div>
      </div>

      <Outlet />
    </>
  );
}

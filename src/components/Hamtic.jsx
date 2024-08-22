import { Link } from "react-router-dom";
import Logo from "../assets/logo-hamtic.png";

export default function Hamtic() {
  return (
    <div className="row h-screen pt-24 px-5 grid items-center">
      <div className="col s12 grid justify-items-center items-start h-4/5">
        <img src={Logo} alt="hamtic logo" width={240} height={240} />
        <h1 className="text-4xl text-white text-center ">
          Municipality of Hamtic
        </h1>
      </div>

      <div className="col s12 h-1/4">
        <Link to="/hamtic/attractions">
          <button
            className="btn waves-effect bg-orange-950 text-white rounded w-full justify-center mb-3"
            type="button"
          >
            <strong>Attractions</strong>
          </button>
        </Link>

        <Link to="/hamtic/products">
          <button className="btn waves-effect bg-orange-950 text-white rounded w-full justify-center mb-3">
            <strong>Native Products</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

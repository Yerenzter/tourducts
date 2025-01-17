import { Link } from "react-router-dom";
import Logo from "../assets/logo-sibalom.png";

export default function Sibalom() {
  return (
    <div className="row h-screen pt-24 px-5 grid items-center">
      <div className="col s12 grid justify-items-center items-start h-4/5 gap-3 ">
        <img src={Logo} alt="hamtic logo" width={240} height={240} />
        <h1 className="text-4xl text-white text-center ">
          Municipality of Sibalom
        </h1>

        <p className="text-white text-center">
          Sibalom officially the Municipality of Sibalom & 2nd class
          municipality in the province of Antique, Philippines.
        </p>
      </div>

      <div className="col s12 h-1/4">
        <Link to="/sibalom/attractions">
          <button className="btn waves-effect bg-orange-950 text-white rounded w-full justify-center mb-3">
            <strong>Attractions</strong>
          </button>
        </Link>

        <Link to="/sibalom/products">
          <button className="btn waves-effect bg-orange-950 text-white rounded w-full justify-center mb-3">
            <strong>Native Products</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

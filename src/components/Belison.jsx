import { Link } from "react-router-dom";
import Logo from "../assets/logo-belison.png";

export default function Belison() {
  return (
    <div className="row h-screen pt-24 px-5 grid items-center">
      <div className="col s12 grid justify-items-center items-start h-4/5 gap-3">
        <img src={Logo} alt="hamtic logo" width={240} height={240} />
        <h1 className="text-4xl text-white text-center ">
          Municipality of Belison
        </h1>

        <p className="text-white text-center">
          Belison, officially the Municipal of Belison & 5th class municipality
          in the province of Antique, Philippines
        </p>

        <p className="text-white text-center">
          According to the 2020 census, it has a population of 14,129 people.
        </p>
      </div>

      <div className="col s12 h-1/4">
        <Link to="/belison/attractions">
          <button
            className="btn waves-effect bg-orange-950 text-white rounded w-full justify-center mb-3"
            type="button"
          >
            <strong>Attractions</strong>
          </button>
        </Link>

        <Link to="/belison/products">
          <button className="btn waves-effect bg-orange-950 text-white rounded w-full justify-center mb-3">
            <strong>Native Products</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

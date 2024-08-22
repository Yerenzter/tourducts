import { Link } from "react-router-dom";
import Logo from "../assets/logo-san-jose.png";

export default function SanJose() {
  return (
    <div className="row h-screen pt-24 px-5 grid items-center">
      <div className="col s12 grid justify-items-center items-start h-4/5 gap-3">
        <img src={Logo} alt="hamtic logo" width={240} height={240} />
        <h1 className="text-4xl text-white text-center ">
          Municipality of San Jose
        </h1>
        <p className="text-white text-center">
          San Jose de Buenavista officially the Municipality of San Jose & 1st
          class municipality and the provincial capital in the province of
          Antique, Philippines.
        </p>

        <p className="text-white text-center">
          According to the 2020 census, it has a population of 62, 420 people.
        </p>
      </div>

      <div className="col s12 h-1/4">
        <Link to="/san-jose/attractions">
          <button className="btn waves-effect bg-orange-950 text-white rounded w-full justify-center mb-3">
            <strong>Attractions</strong>
          </button>
        </Link>

        <Link to="/san-jose/products">
          <button className="btn waves-effect bg-orange-950 text-white rounded w-full justify-center mb-3">
            <strong>Native Products</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function PatnongonProducts() {
  return (
    <div className="row p-10 gap-y-24">
      <div className="col s9">
        <h1 className="text-white text-5xl">
          <strong>Where would you like to visit?</strong>
        </h1>
      </div>

      <div className="col s12 text-center">
        <h2 className="text-white text-2xl">
          <strong>MUNICIPALITY OF PATNONGON</strong>
        </h2>
        <h3 className="text-white">
          <strong>NATIVE PRODUCTS</strong>
        </h3>
      </div>

      <div className="col s12">
        <Link to="/patnongon/products/parangabuhian">
          <button
            className="btn waves-effect bg-orange-950 text-white w-full justify-center mb-3"
            type="button"
          >
            <strong>PARANGABUHIAN WEAVING & DYEING CENTER</strong>
          </button>
        </Link>

        <Link to="/san-jose/attractions/esplanade">
          <button
            className="btn disabled waves-effect bg-orange-950 text-white w-full
            justify-center mb-3 hidden"
            type="button"
          >
            <strong>UNAVAILABLE</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

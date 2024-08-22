import { Link } from "react-router-dom";

export default function PatnongonAttractions() {
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
          <strong>ATTRACTIONS</strong>
        </h3>
      </div>

      <div className="col s12">
        <Link to="/patnongon/attractions/trois-resort">
          <button
            className="btn waves-effect bg-orange-950 text-white w-full justify-center mb-3"
            type="button"
          >
            <strong>TROIS RESORT</strong>
          </button>
        </Link>

        <Link to="/patnongon/attractions/linaw-balud">
          <button
            className="btn waves-effect bg-orange-950 text-white w-full justify-center mb-3"
            type="button"
          >
            <strong>LINAW BALUD</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

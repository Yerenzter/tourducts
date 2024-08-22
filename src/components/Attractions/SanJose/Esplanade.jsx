import { Link } from "react-router-dom";

export default function Esplanade() {
  return (
    <div className="row">
      <div id="attraction-esplanade" className="col s12 h-96 relative">
        <div className="attraction-banner-backdrop h-full grid content-end p-3">
          <h1 className="text-3xl text-white">
            <strong>SAN JOSE ESPLANADE</strong>
          </h1>
          <h2 className="text-2xl text-white">
            <strong>
              Brgy. San Fernando, San Jose de Buenavista, Antique
            </strong>
          </h2>
        </div>
      </div>

      <div className="col s12 p-3 text-white">
        <h1 className="text-3xl">
          <strong>Information</strong>
        </h1>
        <p className="text-justify">
          The San Jose Esplanade offers unobstructed views of the sunset & a
          scenic spot to chill & enjoy the fresh sea breeze.
        </p>
        <p className="text-justify">
          The Municipality of San Jose de Buenavista, with the support of the
          Provincial Government of Antique, initiated the groundbreaking
          ceremony to upgrade the Barangay Como-San Pedro coastal road into San
          Jose Esplande with the total length of 4.1 Kilometers.
        </p>
      </div>

      <div className="col s12 grid justify-items-center absolute right-0 left-0 bottom-0 py-5">
        <Link to="/san-jose/attractions/esplanade/pictures">
          <button
            className="btn bg-orange-950 waves-effect waves-light text-white rounded"
            type="button"
          >
            <strong>Pictures</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function EBJ() {
  return (
    <div className="row">
      <div id="attraction-ebj" className="col s12 h-96 relative">
        <div className="attraction-banner-backdrop h-full grid content-end p-3">
          <h1 className="text-3xl text-white">
            <strong>EBJ FREEDOM PARK</strong>
          </h1>
          <h2 className="text-2xl text-white">
            <strong>San Jose de Buenavista, Antique</strong>
          </h2>
        </div>
      </div>

      <div className="col s12 p-3 text-white">
        <h1 className="text-3xl">
          <strong>Information</strong>
        </h1>
        <p className="text-justify">
          EBJ Freedom Park is located in the heart of the town. It used to be
          known as San Jose de Buenavista Plaza but has been renamed EBJ Freedom
          Park in honor of Antique's beloved hero, Evelio B. Javier.
        </p>
        <p className="text-justify">
          The main attraction of the park is the bronze statue of EBJ with his
          left hand waiving with a peace sign created by National Artist
          Napeleon Abueva
        </p>
      </div>

      <div className="col s12 grid justify-items-center absolute right-0 left-0 bottom-0 py-5">
        <Link to="/san-jose/attractions/ebj-freedom-park/pictures">
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

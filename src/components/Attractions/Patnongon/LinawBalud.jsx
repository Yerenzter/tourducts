import { Link } from "react-router-dom";

export default function LinawBalud() {
  return (
    <div className="row">
      <div id="attraction-linaw-balud" className="col s12 h-96 relative">
        <div className="attraction-banner-backdrop h-full grid content-end p-3">
          <h1 className="text-3xl text-white">
            <strong>LINAW BALUD</strong>
          </h1>
          <h2 className="text-2xl text-white">
            <strong>Brgy. Igburi, Patnongon, Antique</strong>
          </h2>
        </div>
      </div>

      <div className="col s12 p-3 text-white">
        <h1 className="text-3xl">
          <strong>Information</strong>
        </h1>
        <p className="text-white text-justify">
          In Barangay Igburi, Patnongon Antique, is a serene and beautiful
          natural attraction. Surrounded by lush greenery and rocky terrain, the
          falls feature crystal-clear, cool pools perfect for swimming. The
          location offers a peaceful and secluded atmosphere, ideal for those
          seeking tranquality away from crowded tourist spots. Engaging locals
          guides can provide additional insights into the area’s natural and
          cultural heritage.
        </p>

        <br />

        <p className="text-white text-justify">
          The location offers a peaceful and secluded atmosphere, ideal for
          those seeking tranquility away from crowded tourist spots. Engaging
          local guides can provide additional insights into the area&apos;
          natural and cultural heritage.
        </p>

        <br />
        <br />
      </div>

      <div className="col s12 grid justify-items-center fixed right-0 left-0 bottom-0 py-5">
        <Link to="/patnongon/attractions/linaw-balud/pictures">
          <button className="btn bg-orange-950 waves-effect waves-light text-white rounded">
            <strong>Pictures</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

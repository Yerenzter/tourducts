import { Link } from "react-router-dom";

export default function VistaPaloma() {
  return (
    <div className="row">
      <div id="attraction-vista-paloma" className="col s12 h-96 relative">
        <div className="attraction-banner-backdrop h-full grid content-end p-3">
          <h1 className="text-3xl text-white">
            <strong>VISTA PALOMA BEACH RESORT</strong>
          </h1>
          <h2 className="text-2xl text-white">
            <strong>Brgy. Maradiona, Belison, Antique</strong>
          </h2>
        </div>
      </div>

      <div className="col s12 p-3 text-white">
        <h1 className="text-3xl">
          <strong>Information</strong>
        </h1>
        <p>Resort Entrance: 75.00</p>
        <ol type="1" style={{ listStyle: "inside", listStyleType: "numeral" }}>
          Facilities:
          <li>Function Room - 15,000</li>
          <li>Moroccan - 5,000/20-30 pax for 8 hrs.</li>
          <li>
            Swimming:
            <ul
              className="indent-5"
              style={{ listStyle: "inside", listStyleType: "bullet" }}
            >
              <li>150.00 - Adult</li>
              <li>100.00 - Kids</li>
              <li>
                120 - Senior Citizen/PWD
                <ul
                  className="indent-5"
                  style={{ listStyle: "inside", listStyleType: "bullet" }}
                >
                  <li>5 ft. - adult</li>
                  <li>3 ft. - Kids</li>
                  Corkages (Food or Beverage bought outside the resort): 800.00
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Cottages:
            <ul
              className="indent-5"
              style={{ listStyle: "inside", listStyleType: "bullet" }}
            >
              <li>500.00</li>
              <li>750.00</li>
              <li>1,000.00</li>
              <li>1,250.00</li>
            </ul>
          </li>
          <li>
            Room Prices:
            <ul
              className="indent-5"
              style={{ listStyle: "inside", listStyleType: "bullet" }}
            >
              <li>3,500.00/2 pax - 1 night</li>
              <li>4,000.00/2 pax - 1 night</li>
              <li>
                5,500/4 pax - 1 night
                <ul
                  className="indent-5"
                  style={{ listStyle: "inside", listStyleType: "bullet" }}
                >
                  <li>Additional person: 500.00 - Adult, 350.00 - Kids</li>
                </ul>
              </li>
              <li>Barkada Room - 16 pax: 750.00 per head</li>
            </ul>
            Daily tour: 10 A.M. - 4 P.M. Night tour: 4 P.M - 8 P.M.
          </li>
          <li>
            Restaurant:
            <ul
              className="indent-5"
              style={{ listStyle: "inside", listStyleType: "buller" }}
            >
              <li>Filipmo Dishes</li>
              <li>Arabic Dishes</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="col s12 grid justify-items-center fixed right-0 left-0 bottom-0 py-5">
        <Link to="/belison/attractions/vista-paloma/pictures">
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

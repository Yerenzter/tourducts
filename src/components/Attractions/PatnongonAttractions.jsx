export default function PatnongonAttractions() {
  return (
    <div className="row">
      <div id="attraction-patnongon" className="col s12 h-96 relative">
        <div className="attraction-banner-backdrop h-full grid content-end p-3">
          <h1 className="text-3xl text-white">
            <strong>TROIS RESORT</strong>
          </h1>
          <h2 className="text-2xl text-white">
            <strong>Barrientos Street, Patnongon, Antique</strong>
          </h2>
        </div>
      </div>

      <div className="col s12 p-3 text-white">
        <h1 className="text-3xl">
          <strong>Information</strong>
        </h1>
        <p className="text-white text-justify">
          <strong>Trois Resort</strong> was originally a{" "}
          <strong>Resto Bar</strong>. However after being ravaged by{" "}
          <strong>Typhoon Paeng</strong> on October 26, 2022, the owners decided
          to close and renovate the area. They came up with thr idea of adding a
          swimming pool, as the resort is located along the beachside. Trois
          Resort reopened on June 1, amrking anew beginning. This transformation
          aloows the owners to utilize the land productively, helping them
          recover from tragedy they endured.
        </p>

        <br />
        <br />

        <div className="row">
          <div className="col s6">
            <ul>
              <li>
                <strong>Beach front</strong>
              </li>
              <li>
                <strong>Swimming pool</strong>
              </li>
              <li>
                <strong>Function Hall</strong>
              </li>
              <li>
                <strong>Cottage Huts</strong>
              </li>
              <li>
                <strong>Outdoor Activity Grounds</strong>
              </li>
              <li>
                <strong>Billiards</strong>
              </li>
              <li>
                <strong>Karaoke Machine</strong>
              </li>
              <li>
                <strong>Other Amenities</strong>
              </li>
              <br />
              <br />
              <strong>Entrance Fee</strong>
              <strong>OPENS AT:</strong>
              <li>
                Kids:&nbsp;<strong>50</strong>
              </li>
              <li>
                <strong>Weekdays: 8:00 A.M-9:00 P.M.</strong>
              </li>
              <li>
                COTTAGE RATES:&nbsp;<strong>250-500</strong>
              </li>
              <li>
                TABLE RATES:&nbsp;<strong>100</strong>
              </li>
              <br />
              <br />
              <strong>OVERNIGHT</strong>
              <li>By the cottage only no room available at the moment</li>
            </ul>
          </div>

          <div className="col s6">
            <ul>
              <strong>OPEN FOR BOOKING EVENTS</strong>
              <li>
                <i className="material-icons">location_on</i>Barrientos Street,
                Patnongon, Antique
              </li>
              <li>
                <i className="material-icons">phone</i>
                0919 614 3930 / 0995 067 4826
              </li>
              <li>
                <i className="material-icons">email</i>
                <a href="mailto:troisrestoreresort@gmail.com">
                  troisrestoreresort@gmail.com
                </a>
              </li>
              <li>
                <i className="material-icons">facebook</i>
                Trois&apos;s Restobar &amp; Resort
              </li>
              <li>
                <strong>Owner:</strong>
                Ramsel Rafols
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col s12 grid justify-items-center fixed right-0 left-0 bottom-0 py-5">
        <button
          className="btn bg-orange-950 waves-effect waves-light text-white rounded"
          onClick={() =>
            (window.location.href = "/patnongon/attractions/pictures")
          }
        >
          <strong>Pictures</strong>
        </button>
      </div>
    </div>
  );
}

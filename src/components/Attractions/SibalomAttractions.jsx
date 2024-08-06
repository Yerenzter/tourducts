export default function SibalomAttractions() {
  return (
    <div className="row">
      <div id="attraction-sibalom" className="col s12 h-96 relative">
        <div className="attraction-banner-backdrop h-full grid content-end p-3">
          <h1 className="text-3xl text-white">
            <strong>QUEEN ELIZABETH ECO PARK INLAND RESORT</strong>
          </h1>
          <h2 className="text-2xl text-white">
            <strong>Brgy. Initan Sibalom, Antique</strong>
          </h2>
        </div>
      </div>

      <div className="col s12 p-3 text-white">
        <h1 className="text-3xl">
          <strong>Information</strong>
        </h1>
        <ul>
          <li>
            <strong>Owner:&nbsp;</strong>Mataquel Saylo
          </li>
          <li>
            <strong>Contact Details</strong>
            <ul className="indent-5">
              <li>
                <strong>Contact Number:&nbsp;</strong>0963 683 0047 or 0967 583
                5017
              </li>
              <li>
                <strong>FB:&nbsp;</strong>Queen Elizabeth Resort
              </li>
            </ul>
          </li>
          <li>
            <strong>Entrance Fee:</strong>
            <ul className="indent-5">
              <li>3-5 yrs. old - 30</li>
              <li>6 above - 40</li>
            </ul>
          </li>
          <br />
          <br />
          <li>
            <strong>Cottages -&nbsp;</strong>400.00
          </li>
          <li>
            <strong>Overnight -&nbsp;</strong>2,000.00
          </li>
          <li>
            <strong>Open Hours -&nbsp;</strong>anytime
          </li>
        </ul>
      </div>

      <div className="col s12 grid justify-items-center fixed right-0 left-0 bottom-0 py-5">
        <button
          className="btn bg-orange-950 waves-effect waves-light text-white rounded"
          onClick={() =>
            (window.location.href = "/sibalom/attractions/pictures")
          }
        >
          <strong>Pictures</strong>
        </button>
      </div>
    </div>
  );
}

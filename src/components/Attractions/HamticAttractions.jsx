export default function HamticAttractions() {
  return (
    <div className="row">
      <div id="attraction-hamtic" className="col s12 h-96 relative">
        <div className="attraction-banner-backdrop h-full grid content-end p-3">
          <h1 className="text-3xl text-white">
            <strong>STA. MONICA CHURCH</strong>
          </h1>
          <h2 className="text-2xl text-white">
            <strong>Hamtic, Antique</strong>
          </h2>
        </div>
      </div>

      <div className="col s12 p-3 text-white">
        <h1 className="text-3xl">
          <strong>Information</strong>
        </h1>
        <p className="text-justify">
          Sta. Monica Church, also known as Hamtic Church, stands as historical
          and cultural beacon in Hamtic, Antique, Philippines. Dedicatedto Saint
          Monica, the mother of Saint Augustine, the church traces its roots
          back to the Spanish colonial period, making it on of the oldest
          religious structures in the province.
        </p>
      </div>

      <div className="col s12 grid justify-items-center absolute right-0 left-0 bottom-0 py-5">
        <button className="btn bg-orange-950 waves-effect waves-light text-white rounded" onClick={() => window.location.href="/hamtic/attractions/pictures"}><strong>Pictures</strong></button>
      </div>
    </div>
  );
}

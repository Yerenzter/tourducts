export default function Baldone() {
  return (
    <div className="row">
      <div id="product-baldone" className="col s12 h-96 relative">
        <div className="attraction-banner-backdrop h-full grid content-end p-3">
          <h1 className="text-3xl text-white">
            <strong>BALDONE WOODWORKS</strong>
          </h1>
          <h2 className="text-2xl text-white">
            <strong>Brgy. Funda Dalipe, San Jose de Buenavista, Antique</strong>
          </h2>
        </div>
      </div>

      <div className="col s12 p-3 text-white">
        <h1 className="text-3xl">
          <strong>Information</strong>
        </h1>
        <p className="text-justify">
          Furniture shop located in Funda Dalipe that has been conducting their
          business operations for 21 years now
        </p>

        <br />
        <br />

        <h1 className="text-3xl">
          <strong>About</strong>
        </h1>

        <ul>
          <li>Contact Number: 0916-156-8513</li>
        </ul>
      </div>

      <div className="col s12 grid justify-items-center absolute right-0 left-0 bottom-0 py-5">
        <Link to="/patnonongon/products/baldone-woodworks/pictures">
          <button className="btn bg-orange-950 waves-effect waves-light text-white rounded">
            <strong>Pictures</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

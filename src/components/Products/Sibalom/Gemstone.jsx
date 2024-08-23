export default function Gemstone() {
  return (
    <div className="row">
      <div id="product-sibalom" className="col s12 h-96 relative">
        <div className="attraction-banner-backdrop h-full grid content-end p-3">
          <h1 className="text-3xl text-white">
            <strong>GEMTREE SIBALOM GEMSTONE</strong>
          </h1>
          <h2 className="text-2xl text-white">
            <strong>Brgy. Iglanot, Sibalom, Antique</strong>
          </h2>
        </div>
      </div>

      <div className="col s12 p-3 text-white">
        <h1 className="text-3xl">
          <strong>Information</strong>
        </h1>
        <p className="text-justify">
          Sir Dodoy started making gemstone trees in 1996. He is known as the{" "}
          <q>Gemstone Maker</q> in the Philippines because of his beautiful
          creations. The gemstones are found in river bridge and creeks. He sell
          his gemstone trees for 2500 pesos or 50-100 pesos depending on the
          size. According to him he can make a gemstone tree, he needs epoxy
          wire, gemstones, glue, gloss and rubber.
        </p>

        <br />
        <br />

        <h1 className="text-3xl">
          <strong>About</strong>
        </h1>

        <ul>
          <li>Reynald Palacios Rubino</li>
          <li>Location: Brgy. Iglanot, Sibalom, Antique</li>
          <li>Known as: Gemstone maker/producer in the Philippines</li>
          <li>Contact no.: 0963 663 2732</li>
          <li>FB Acc: Reynald Palacios Rubino</li>
          <li>Started: since 1996</li>
          <li>Source: River bridge, creeks</li>
          <li>Price: 50-100 small, 2500 large... depending on the sizes</li>
          <li>
            <ul>
              <li>Duration: 10 pieces a day (small)</li>
              <li>1 piece in 4 days (large)</li>
            </ul>
          </li>
          <li>Materials epoxy, wire, gemstone, glue, gloss, rubber</li>
        </ul>
      </div>

      <div className="col s12 grid justify-items-center absolute right-0 left-0 bottom-0 py-5">
        <button
          className="btn bg-orange-950 waves-effect waves-light text-white rounded"
          onClick={() =>
            (window.location.href = "/hamtic/attractions/pictures")
          }
        >
          <strong>Pictures</strong>
        </button>
      </div>
    </div>
  );
}

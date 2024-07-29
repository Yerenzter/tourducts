export default function Trois() {
  return (
    <div className="row">
      <div className="col s12 trois-banner h-56 p-5 mb-3 relative mt-16">
        <h1 className="absolute z-50 bottom-1 text-2xl text-white">
          <strong>Trois Resort</strong>
        </h1>
      </div>

      <div className="col s12 px-5">
        <div className="row gap-3 overflow-y-hidden overflow-x-scroll">
          <div className="col s4 trois-1 h-24 rounded-md relative"></div>
          <div className="col s4 trois-2 h-24 rounded-md relative"></div>
        </div>
      </div>

      <div className="col s12 px-5">
        <p className="flow-text text-justify indent-5">
          It was originally a Resto Bar. However after being ravaged by Typhoon
          Paeng on October 26, 2022, the owners decided to close and renovate
          the area. They came up with the idea of adding swimming pool, as the
          resort is located along the beachside.
        </p>

        <p className="flow-text text-justify indent-5">
          Trois resort reopened on June 1, marking new beginning. This
          transformation allows the owners to utilize the land productively,
          helping them recover from the tragedy they endured.
        </p>
      </div>
    </div>
  );
}

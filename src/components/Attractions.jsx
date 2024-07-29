export default function Attractions() {
  return (
    <div className="row">
      <div className="col s12 p-10">
        <h1 className="text-6xl text-white">
          <strong>Attractions</strong>
        </h1>
      </div>
      <div
        className="col s12 trois-banner h-48 p-5 mx-10 mb-3 rounded-lg relative"
        onClick={() => (window.location.href = "/attractions/trois")}
      >
        <h1 className="absolute z-50 bottom-1 text-2xl">
          <strong>Trois Resort</strong>
        </h1>
      </div>

      <div
        className="col s12 linaw-balud-banner h-48 p-5 mx-10 mb-3 rounded-lg relative"
        onClick={() => (window.location.href = "/attractions/linaw-balud")}
      >
        <h1 className="absolute z-50 bottom-1 text-2xl">
          <strong>Linaw Balud</strong>
        </h1>
      </div>
    </div>
  );
}

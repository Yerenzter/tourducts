export default function Products() {
  return (
    <div className="row">
      <div className="col s12 p-10">
        <h1 className="text-6xl text-white">
          <strong>Products</strong>
        </h1>
      </div>
      <div
        className="col s12 broom-banner h-48 p-5 mx-10 mb-3 rounded-lg relative"
        onClick={() => (window.location.href = "/products/brooms")}
      >
        <h1 className="absolute z-50 bottom-1 text-2xl text-white">
          <strong>Brooms/Walis Tambo</strong>
        </h1>
      </div>

      <div className="col s12 hats-banner h-48 p-5 mx-10 mb-3 rounded-lg relative">
        <h1 className="absolute z-50 bottom-1 text-2xl">
          <strong>Hats/Salakot</strong>
        </h1>
      </div>

      <div className="col s12 weaving-banner h-48 p-5 mx-10 mb-3 rounded-lg relative">
        <h1 className="absolute z-50 bottom-1 text-2xl">
          <strong>Weaving & Dyeing Center</strong>
        </h1>
      </div>
    </div>
  );
}

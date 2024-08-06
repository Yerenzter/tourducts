import Logo from "../assets/logo-belison.png";

export default function Belison() {
  return (
    <div className="row h-screen pt-24 px-5 grid items-center">
      <div className="col s12 grid justify-items-center items-start h-4/5">
        <img src={Logo} alt="hamtic logo" width={240} height={240} />
        <h1 className="text-4xl text-white text-center ">
          Municipality of Belison
        </h1>
      </div>

      <div className="col s12 h-1/4">
        <button
          className="btn waves-effect bg-orange-950 text-white rounded w-full justify-center mb-3"
          onClick={() => (window.location.href = "/belison/attractions")}
        >
          <strong>Attractions</strong>
        </button>

        <button className="btn waves-effect bg-orange-950 text-white rounded w-full justify-center mb-3">
          <strong>Native Products</strong>
        </button>
      </div>
    </div>
  );
}

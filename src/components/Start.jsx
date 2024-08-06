import Logo from "../assets/logo-app.png";

export default function Start() {
  return (
    <div className="row h-screen bg-orange-500 grid items-center content-center">
      <div className="col s12 grid justify-items-center items-center">
        <img src={Logo} alt="logo" width={150} height={150} />
        <h1>
          <span className="text-white">Tourducts &nbsp;</span>
          <span className="text-black">App</span>
        </h1>
        <p className="text-white text-left">
          Tourists / Native Products Application
        </p>
      </div>

      <div className="col s12 grid justify-items-center">
        <button
          className="btn rounded waves-effect bg-orange-950 text-white"
          onClick={() => (window.location.href = "/")}
        >
          Get Started!
        </button>
      </div>
    </div>
  );
}

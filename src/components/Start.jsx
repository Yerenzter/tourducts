import Logo from "../assets/logo-app.png";

export default function Start() {
  return (
    <div className="row h-screen bg-orange-500 grid items-center content-center">
      <div className="col s12 grid justify-items-center items-center">
        <img src={Logo} alt="logo" width={150} height={150} />
        <h1>
          <span className="text-white text-6xl">Tourducts &nbsp;</span>
          <span className="text-black text-6xl">App</span>
        </h1>
        <p className="text-white text-center text-2xl">
          Tourists / Native Products Application
        </p>
      </div>

      <div className="col s12 grid justify-items-center">
        <button
          className="btn rounded waves-effect bg-orange-950 text-white text-2xl"
          onClick={() => (window.location.href = "/")}
        >
          <strong>Get Started!</strong>
        </button>
      </div>
    </div>
  );
}

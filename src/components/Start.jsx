import Logo from "../assets/logo.jpg";

export default function Start() {
  return (
    <div className="grid h-screen justify-items-center items-center">
      <div className="grid justify-items-center">
        <img
          src={Logo}
          className="rounded-full mb-5"
          style={{ border: "solid #000 3px" }}
          alt="logo"
          width={120}
          height={120}
        />
        <h1 className="text-center text-5xl mb-3">
          <strong>
            <span className="text-white">Tourducts&nbsp;</span>
            <span className="text-black">App</span>
          </strong>
        </h1>
        <p style={{ letterSpacing: "2px" }}>Tourist Application</p>
      </div>

      <div className="p-10">
        <button className="btn-large bg-blue-800 waves-effect rounded-full" onClick={() => window.location.href='/'}>Get Started</button>
      </div>
    </div>
  );
}

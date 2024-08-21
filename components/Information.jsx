import Logo from "../assets/logo-app.png";

export default function Information() {
  return (
    <div className="row">
      <div className="col s12 text-center grid justify-items-center">
        <h1 className="text-6xl">
          <span className="text-white">Tourducts</span>
          <span className="text-black">App</span>
        </h1>
        <p className="text-white text-2xl mb-5">
          Tourist &amp; Native Products Application
        </p>
        <p className="text-justify text-white">
          Welcome to Tourducts App your ultimate guide to exploring and the best
          tourist attractions and discovering uniqye native products. Wheteher
          you&apos;re traveler seeking hiddent products or looking to support
          regional artisans, our app offers a comprehensive directory of most
          visit sites and authentic goods. Dive home a piece of tradition with
          every purchase
        </p>

        <img src={Logo} alt="logo" width={240} height={240} className="m-5" />
        <p className="text-white">Discover the heart and soul of our destination with Tourducts.</p>
      </div>
    </div>
  );
}

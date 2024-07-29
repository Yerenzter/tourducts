import Logo from '../assets/logo.png';

export default function Home() {
  return (
    <div className="row overflow-hidden">
      <div className="col s6 p-10 page-1">
        <span className="text-6xl"><strong>Municipality of</strong></span>
        <br />
        <span className="text-6xl text-yellow-500"><strong>Patnongon</strong></span>
      </div>

      <div className="col s12 page-2 welcome-bottom relative">
        <img src={Logo} alt="logo" width={180} height={180} className='relative z-50 bottom-28 float-right m-5' />
      </div>
    </div>
  );
}

import { Outlet } from "react-router-dom";

export default function Back() {
  return (
    <>
      <div className="navbar-fixed absolute">
        <nav className="shadow-none">
          <div className="nav-wrapper bg-orange-500 p-3">
            <a href="/" className="text-3xl">
              <i className="material-icons">arrow_back</i>
            </a>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

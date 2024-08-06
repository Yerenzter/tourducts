import { Outlet } from "react-router-dom";

export default function Back() {
  return (
    <>
      <div className="navbar-fixed absolute">
        <nav className="shadow-none bg-transparent">
          <div className="nav-wrapper bg-transparent px-3">
            <a href="/" className="text-3xl waves-effect waves-light">
              <i className="material-icons">arrow_back</i>
            </a>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

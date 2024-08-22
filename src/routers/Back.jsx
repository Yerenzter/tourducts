import { Link, Outlet } from "react-router-dom";

export default function Back() {
  return (
    <>
      <div className="navbar-fixed absolute">
        <nav className="shadow-none bg-transparent">
          <div className="nav-wrapper bg-transparent px-3">
            <button
              className="text-3xl waves-effect waves-light"
              onClick={() => history.back()}
            >
              <i className="material-icons">arrow_back</i>
            </button>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

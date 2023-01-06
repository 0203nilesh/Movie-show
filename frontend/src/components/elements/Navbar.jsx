// eslint-disable-next-line
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate= useNavigate();
  const username= props.username;
  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    navigate("/login");
    window.location.reload();
  }
  return (
    <>
      <nav className="px-2 font-monospace  navbar body-background navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
        <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle ml-3"
            height="30"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          /> </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Movies
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Web series
              </Link>
              <div className="dropdown-menu body-background" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Romance
                </Link>
                <Link className="dropdown-item" to="#">
                  Comedy
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="#">
                Sports
              </Link>
            </li>
          </ul>
          { username==='' || username===null ?<><Link to="/register">
            <button
              className="mx-2 btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Login
            </button>
          </Link></>:<>
          <Link to="/login">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={logout}
            >
              Logout
            </button>
          </Link>
          <Link className="ml-3 mr-3" to="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
            >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>{" "}
            </Link>
          </> }
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// eslint-disable-next-line
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="text-center body-background text-white" style={{backgroundColor: "#f1f1f1"}}>
        <div className="container pt-2">
          <section className="mb-1">
            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              to="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              to="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              to="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              to="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              to="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              to="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </Link>
          </section>
        </div>

        <div
          className="bottom-set text-center text-dark p-3"
          style={{backgroundColor:"black"}}
        >
          © 2020 Copyright:
          <Link className="text-dark" to="https://mdbootstrap.com/">
            MDBootstrap.com
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="card  w-25 d-inline-block mx-2">
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src={props.src}
            className="img-fluid"
          />
          <Link to="#!">
            <div
              className="mask"
              style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
            ></div>
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title heading-font"> {props.title}  </h5>
          <p className="card-text font-monospace ">
            {props.detail}
          </p>
          <Link to="/play" className="btn btn-primary">
            Watch
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;

import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [alert, setAlert]= useState({
    type: "",
    message: "",
    display: "none"
  });
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  });

  function alertFunction(message, type, nav) {
    setAlert({
      type: type,
      message: message,
      display: "block"
    })
    setTimeout(() => {
      setAlert({
        type: "",
        message: "",
        display: "none"
      })
      navigate(nav);
    }, 2000);
  }

  function changeHandler(event) {
    const setProp = event.target.name;
    const setVal = event.target.value;
    setUserInfo((prevValue) => {
      return { ...prevValue, [setProp]: setVal };
    });
  }

  async function submitted(event) {
    event.preventDefault();
    // console.log(userInfo);
    const requestOption = {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    };
    await fetch("/login", requestOption)
      .then((response) => response.json())
      .then((data) => {
        props.setUsername(data.username);
        if (data.message === "success") {
          alertFunction("success", "success", "/profile");
        } else {
          alertFunction(data.message, "warning", "/login");
          navigate("/login");
        }
      });
    // console.log("Submitted");
  }

  return (
    <>
      <div className={`alert alert-${alert.type} d-${alert.display}`} role="alert">
       {alert.message}
      </div>
      <Navbar username={props.username} />
      <div className="container w-25 pt-3 mb-5 mt-5">
        <form>
          <h3
            className=" title mt-4 contact-title"
            style={{ fontFamily: "Anybody, cursive" }}
          >
            Login
          </h3>
          <div className="form-outline my-3 ">
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              name="username"
              onChange={changeHandler}
            />
            <label className="form-label" htmlFor="form2Example1">
              Username
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              name="password"
              onChange={changeHandler}
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example34"
                />
                <label className="form-check-label" htmlFor="form2Example34">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <Link to="#!">Forgot password?</Link>
            </div>
          </div>

          <button
            type="submit"
            onClick={submitted}
            className="btn btn-primary btn-block mb-4"
          >
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
            <p>or sign up with:</p>
            <button
              type="button"
              className="btn btn-secondary btn-floating mx-1"
            >
              <i className="fab fa-facebook-f"></i>
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-floating mx-1"
            >
              <i className="fab fa-google"></i>
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-floating mx-1"
            >
              <i className="fab fa-twitter"></i>
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-floating mx-1"
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;

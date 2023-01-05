import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Link, useNavigate } from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();
  const [alert, setAlert]= useState({
    type: "",
    message: "",
    display: "none"
  });
  const [userInfo , setUserInfo]= useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  })

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

  function changeHandler(event){
    const setProp= event.target.name;
    const setVal= event.target.value;
    setUserInfo((prevValue)=>{
      return {...prevValue, [setProp]: setVal}
    })
  }
  
  async function submitted(event){
    console.log(userInfo);
    event.preventDefault();
    console.log("Submitted");
    const requestOption= {
      method: "POST",
      body:  JSON.stringify(userInfo),
      headers: { 'Content-Type': 'application/json' }
    }
    await fetch('/register', requestOption)
    .then((response)=> response.json())
    .then((data)=> {
      if(data === "user saved"){
        alertFunction("Registration Succesfull", "success", "/");
      }  else{
        alertFunction("Error in registration", "warning", "/register");
      }
    })
  }
  return (
    <>
    <div class={`alert alert-${alert.type} d-${alert.display} h-50`} role="alert">
       {alert.message}
      </div>
    <Navbar username={props.username} />
      <div className="container w-25 pt-4 mb-4">
        <form method="POST">
          <h3 className="title mb-4 contact-title"> Register Now</h3>
          <div className="row mb-4">
            <div className="col mb-1">
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example1"
                  className="form-control"
                  name="firstName"
                  onChange={changeHandler} 
                />
                <label className="form-label" htmlFor="form3Example1">
                  First name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example2"
                  className="form-control"
                  name="lastName"
                  onChange={changeHandler} 
                />
                <label className="form-label" htmlFor="form3Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>
          
          <div className="form-outline mb-4">
            <input
              type="username"
              id="form3Example4"
              className="form-control"
              name="username"
              onChange={changeHandler} 
            />
            <label className="form-label" htmlFor="form3Example4">
              Username
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control" name="email"
            onChange={changeHandler} />
            <label className="form-label" htmlFor="form3Example3">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form3Example4"
              className="form-control"
              name="password"
              onChange={changeHandler} 
            />
            <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
          </div>

          <button type="submit" onClick={submitted} className="btn btn-primary btn-block mb-4">
            Sign up
          </button>

          <div className="text-center">
          <p>
              Already a member? <Link to="/login">login</Link>
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
      <Footer/>
    </>
  );
}

export default Register;

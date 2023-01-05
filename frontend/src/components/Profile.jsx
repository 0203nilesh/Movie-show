import { useEffect, useState } from "react";
import Footer from "./elements/Footer";
import Navbar from "./elements/Navbar";
import { Link, useNavigate } from "react-router-dom";

function Profile(props) {
  console.log(props.username);
  const navigate= useNavigate();
  const [url, setUrl]= useState({
    src: "favicon.png",
    firstName: "",
    lastName: "",
    username: "",
    email: ""
  });
  // let url;
  // const username= "nilesh@123";
  useEffect( () => {
    if(props.username!==''){
    fetch('http://localhost:4000/profile/'+props.username)
     .then((response)=> response.json())
     .then((data)=> {
      //  const profileData= data.map((element)=>{
      //    if(element &&  element.username === props.username){
      //      // console.log(element);
      //      return {...element};
      //    }
      //  }
      //  );
      //  setUrl(profileData[0]);
       console.log(data);
       setUrl(data[0]);
       props.setId(data[0].id);
       // if(data==="login first"){
       //   navigate("/login");
       // }
     }) 
 
     // console.log();
    } else{
      navigate("/login");
    }
   }, [])
  return (
    <>
    <Navbar username={props.username} />
      <section className="vh-90 mb-7" style={{backgroundColor: "#f4f5f7"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{borderRadius: ".5rem"}}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{borderTopLeftRadius: ".5rem" , borderBottomLeftRadius: ".5rem"}}
                  >
                    <img
                      src={url.src}
                      alt="Avatar" 
                      className="img-fluid my-5 rounded-circle"
                      style={{width: "80px"}}
                    />
                    <h5>{url.firstName} {url.lastName}</h5>
                    <Link to="/editProfile">
                    <i className="far fa-edit mb-5"></i>
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted"> {url.email} </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">123 456 789</p>
                        </div>
                      </div>
                      <h6>Projects</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Recent</h6>
                          <p className="text-muted">Lorem ipsum</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Most Viewed</h6>
                          <p className="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <Link to="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </Link>
                        <Link to="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </Link>
                        <Link to="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;

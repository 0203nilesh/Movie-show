import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import "./EditProfile.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Profile(props) {
  const navigate= useNavigate();
  const updateData = new FormData();
  const [details, setDetails]= useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  function changeHandler(event){
    const setProp= event.target.name;
    const setVal = event.target.value;
    setDetails((prevValue)=>{
      return {...prevValue,[setProp]: setVal}
    })
  }
  function uploadHandler(event){
    // const data= event.target.files[0];
    updateData.append('file', event.target.files[0]);
    // console.log(data);
  }
    async function UpdateProfile(event){
    event.preventDefault();
    updateData.append('firstName', details.firstName);
    updateData.append('lastName', details.lastName);
    updateData.append('email', details.email);
    updateData.append('username', props.username);
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post("/updateProfile/"+props.id, updateData, config)
    .then((response)=>response)
    .then((data)=> {
      console.log(data);
      if(data.data=== "success"){
        setDetails({
          firstName: "",
          lastName: "",
          email: "",
        })
        navigate('/profile');
      } else{
        navigate("/editProfile");
      }
    })
    // event.preventDefault();
    // console.log(details);
    //   const requestOption= {
    //     method: "POST",
    //     body: JSON.stringify(details),
    //     headers: {"Content-Type": "multipart/form-data"}
    //   }
    //   await fetch("/updateProfile", requestOption)
    //   .then((response)=> response.json())
    //   .then((data)=> console.log(data) );
  }
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
       // const profileData= data.map((element)=>{
       //   if(element.username === username){
       //     // console.log(element);
       //     return {...element};
       //   }
       // });
       // setUrl(profileData[0]);
       console.log(data);
       setUrl(data[0]);
       // if(data==="login first"){
       //   navigate("/login");
       // }
     }) 
 
     // console.log();
    }
   }, [])
  return (
    <>
      <Navbar username={props.username} />
      <div className="container editProfile rounded bg-white mt-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                src={url.src}
                width="90"
              />
              <span className="font-weight-bold">{url.firstName} {url.lastName}</span>
              <span className="text-black-50">{url.email}</span>
              <span>United States</span>
            </div>
          </div>
            <div className="col-md-8">
          <form method="post" encType="multipart/form-data">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex flex-row align-items-center back">
                    <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                    <Link to="/" className="text-dark">
                      <h6>Back to home</h6>
                    </Link>
                  </div>
                  <h6 className="text-right">Edit Profile</h6>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      onChange={changeHandler}
                      placeholder="first name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      onChange={changeHandler}
                      placeholder="last name"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <input type="text" name="email" className="form-control" placeholder="Email" onChange={changeHandler} />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control" 
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <label className="form-label mt-4" for="customFile">
                  Profile Image
                </label>
                <input type="file" className="form-control mt-6" id="customFile" name="image" onChange={uploadHandler} />
                <div className="mt-5 text-right">
                  <button className="btn btn-primary profile-button" type="submit" onClick={UpdateProfile}>
                    Save Profile
                  </button>
                </div>
              </div>
          </form>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;

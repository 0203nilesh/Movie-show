// eslint-disable-next-line

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Profile from "./components/Profile";
import Login from "./components/elements/Login";
import Register from "./components/elements/Register";
import EditProfile from './components/elements/EditProfile';
import { useState } from "react";
import Play from "./components/elements/Play";
import Playvideo from "./components/Playvideo";

function App() {
  const [username, setUsername]= useState( "" || localStorage.getItem("username"));
  const [id, setId] = useState("" || localStorage.getItem("id"));
  function usernameSet(name){
    localStorage.setItem("username", name);
    setUsername(name);
  }
  function settingId(id){
    localStorage.setItem("id", id);
    setId(id);
  }
  console.log(username, id);
  return (
    <>
      <BrowserRouter  >
      <Routes>
          <Route path='/' element={<Home username={username}/>}/>
          <Route path='/about' element={<About username={username}/>}/>
          <Route path='/contact' element={<Contact username={username} />} />
          <Route path='/login' element={<Login username={username} setUsername={usernameSet} />} />
          <Route path='/register' element={<Register username={username} setUsername={usernameSet} />} />
          <Route path='/profile' element={<Profile setId={settingId}  username={username}/>} />
          <Route path='/editProfile' element={<EditProfile id={id} username={username} />} />
          <Route path='/play' element={<Playvideo id={id} username={username} />} />
          {/* <Route path='/login' element={<Login/>} /> */}
          {/* <Route path='/register' element={<Register/>} /> */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;

import Card from "./Card";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";

function Section(props) {
  const [sectionData, setSectionData]= useState([])
    useEffect(() => {
       axios.get("/sectionData")
      .then((response)=> {
        // console.log(response);
        // sectionData= response.data;
        setSectionData(response.data);
        // console.log(sectionData);
      })
    }, [])
    console.log(sectionData);
  return (
    <>
    <div className="m-3">
    <h2 className="ml-5 mt-2 mb-0 section-heading-font">{props.heading}</h2>
      <div className="container p-2 mt-2 d-flex justify-content-center align-items-center">
        {sectionData.map((section, index)=>{
          return <Card key={index} title={section.title} detail={section.detail} src={section.src} />
        })}
        </div>
            {/* <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> */}
        </div>
    </>
  );
}

export default Section;

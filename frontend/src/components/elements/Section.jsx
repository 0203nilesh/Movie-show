import Card from "./Card";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";

function Section() {
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
      <div className="container p-2 mt-4 d-flex justify-content-center align-items-center">
        {sectionData.map((section, index)=>{
          return <Card key={index} title={section.title} detail={section.detail} src={section.src} />
        })}
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

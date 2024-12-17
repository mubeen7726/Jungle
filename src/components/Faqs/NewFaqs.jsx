import React from "react";
import { useState } from "react";
import "./Faqs.css";
import Faqs from "./Faqsone";
import Faqstwo from "./Faqstwo";
import FaqsThree from "./faqsthree";
import Faqsfour from "./Faqsfour";
import Faqsfive from "./Faqsfive";
import Faqssix from "./Faqssix";


function NewFaqs() {
 

  return (
    <>
    <div className="justify-content-center d-flex py-5"style={{backgroundColor:"rgb(254, 242, 231)",fontFamily:"Montserrat,sans-serif"}}><h1 className="fw-bolder" >FAQS</h1></div>
    
 <Faqs/>
 <Faqstwo/>
 <FaqsThree/>
 <Faqsfour/>
 <Faqsfive/>
 <Faqssix/>
 
    </>
  );
}

export default NewFaqs;

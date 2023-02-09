import React from 'react';
import rubrics from './img/rubrics.png';
import './Detailrub.js';
import {useNavigate,} from "react-router-dom";




export default function Rubrics() {
  const navigate = useNavigate();
    function goToHome(){
        navigate("/Detailrub")
    }

  return (
    
      <div>
        
      <img onClick={goToHome} src={rubrics} alt="rubrics"></img>
    
      </div>
    
  );
}


import React from 'react';
import {FaCircle} from 'react-icons/fa';


const chooseUs = () => {
   const reasons = ["12+ Years of Experience", "Quality products", "Creative Design"
                   ,"Latest Trends","Vastu satra consultancy","50+ Projects completed",
                   "Free Basic Consultation","20+ Happy clients"];

    return(
        <ul className = "reasonsList">
           {reasons.map((item) => {
               return <li className="flex flex-row">
                <FaCircle className="mt-1 pr-2"/>{item} </li>
           })}    
        </ul>
    )

}

export default chooseUs
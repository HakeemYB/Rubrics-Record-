import React from "react";
import { Link, } from 'react-router-dom';







function ClassVII(){



  return (
    <div>
      <h1 align="center">This is summary of all the students in Class VII</h1>
       <table border align="center">
        
        <tbody>
          <th>Student Name</th>
          <th>Project 1</th>
          <th>Project 2</th>
          <th>Project 3</th>

          
            <tr className="topnav">
        {(JSON.parse(localStorage.getItem('students')) || []).map(
          (s, index) => (
            <li className="topnav" key={s.name }>
              {s.name} 
            
            </li>
          )
        )}
      
      <td>2</td>
      <td>3</td>
      <td>4</td>
          </tr>
        </tbody>
      </table>


      <br></br>
     <Link to="/Add"> <button>Add Student</button></Link>
     <Link to="/Add"> <button>Add Project</button></Link>
     <Link to="/Add"> <button>Add Skill</button></Link>
     
     
      </div>
  );
}
export default ClassVII;
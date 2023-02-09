
import { motion } from "framer-motion";
import { useState } from "react";
import '../App.css';
import comp0 from './img/comp0.png';
import comp1 from './img/comp1.png';
import comp2 from './img/comp2.png';
import comp3 from './img/comp3.png';
import comp4 from './img/comp4.png';
import comp5 from './img/comp5.png';
import comp6 from './img/comp6.png';
import comp7 from './img/comp7.png';
import comp8 from './img/comp8.png';
import comp9 from './img/comp9.png';

const Detailrub = () => {
  
  const [isOpencomp, setIsOpencomp]= useState(false);
  const [isOpencomplevel1, setIsOpencomplevel1]= useState(false);
  const [isOpencomplevel3, setIsOpencomplevel3]= useState(false);
  const [isOpencomplevel5, setIsOpencomplevel5]= useState(false);
  const [isOpencomplevel7, setIsOpencomplevel7]= useState(false);

  const [isOpencomp1, setIsOpencomp1]= useState(false);
  const [isOpencomp1level1, setIsOpencomp1level1]= useState(false);
  const [isOpencomp1level3, setIsOpencomp1level3]= useState(false);
  const [isOpencomp1level5, setIsOpencomp1level5]= useState(false);
  const [isOpencomp1level7, setIsOpencomp1level7]= useState(false);

  const [isOpencomp2, setIsOpencomp2]= useState(false);
  const [isOpencomp2level1, setIsOpencomp2level1]= useState(false);
  const [isOpencomp2level3, setIsOpencomp2level3]= useState(false);
  const [isOpencomp2level5, setIsOpencomp2level5]= useState(false);
  const [isOpencomp2level7, setIsOpencomp2level7]= useState(false);

  const [isOpencomp3, setIsOpencomp3]= useState(false);
  const [isOpencomp3level1, setIsOpencomp3level1]= useState(false);
  const [isOpencomp3level3, setIsOpencomp3level3]= useState(false);
  const [isOpencomp3level5, setIsOpencomp3level5]= useState(false);
  const [isOpencomp3level7, setIsOpencomp3level7]= useState(false);

  const [isOpencomp4, setIsOpencomp4]= useState(false);
  const [isOpencomp4level1, setIsOpencomp4level1]= useState(false);
  const [isOpencomp4level3, setIsOpencomp4level3]= useState(false);
  const [isOpencomp4level5, setIsOpencomp4level5]= useState(false);
  const [isOpencomp4level7, setIsOpencomp4level7]= useState(false);

  const [isOpencomp5, setIsOpencomp5]= useState(false);
  const [isOpencomp5level1, setIsOpencomp5level1]= useState(false);
  const [isOpencomp5level3, setIsOpencomp5level3]= useState(false);
  const [isOpencomp5level5, setIsOpencomp5level5]= useState(false);
  const [isOpencomp5level7, setIsOpencomp5level7]= useState(false);

  const [isOpencomp6, setIsOpencomp6]= useState(false);
  const [isOpencomp6level1, setIsOpencomp6level1]= useState(false);
  const [isOpencomp6level3, setIsOpencomp6level3]= useState(false);
  const [isOpencomp6level5, setIsOpencomp6level5]= useState(false);
  const [isOpencomp6level7, setIsOpencomp6level7]= useState(false);

  const [isOpencomp7, setIsOpencomp7]= useState(false);
  const [isOpencomp7level1, setIsOpencomp7level1]= useState(false);
  const [isOpencomp7level3, setIsOpencomp7level3]= useState(false);
  const [isOpencomp7level5, setIsOpencomp7level5]= useState(false);
  const [isOpencomp7level7, setIsOpencomp7level7]= useState(false);

  const [isOpencomp8, setIsOpencomp8]= useState(false);
  const [isOpencomp8level1, setIsOpencomp8level1]= useState(false);
  const [isOpencomp8level3, setIsOpencomp8level3]= useState(false);
  const [isOpencomp8level5, setIsOpencomp8level5]= useState(false);
  const [isOpencomp8level7, setIsOpencomp8level7]= useState(false);

  const [isOpencomp9, setIsOpencomp9]= useState(false);
  const [isOpencomp9level1, setIsOpencomp9level1]= useState(false);
  const [isOpencomp9level3, setIsOpencomp9level3]= useState(false);
  const [isOpencomp9level5, setIsOpencomp9level5]= useState(false);
  const [isOpencomp9level7, setIsOpencomp9level7]= useState(false);




    return (
     
     <div>
      <br></br>
      <p >This is Project Assessment Rubrics filled by the teacher for each student at the end of the project</p>
      <table className="centeredtable">
        <tbody >
          
          <tr >
            <td colSpan="7"><motion.div transition={{layout: {duration: 1, type:"spring"}}} layout className="carda" onClick={()=> setIsOpencomp(!isOpencomp)}>
              <motion.h3 >Successful Completion of Project </motion.h3>
              {isOpencomp &&(<motion.div> <p> <img src={comp0} alt="comp0"></img> <br></br>This component of rubrics shows a holistic picture of project completion  </p></motion.div>)}
              </motion.div>
              </td>
          </tr>
                
          <tr>
            <td><motion.div className="card" onClick={()=> setIsOpencomplevel1(!isOpencomplevel1)}>
              <motion.h3>Level 1</motion.h3>
              {isOpencomplevel1 &&(
              <motion.div> <p>The project does not contains essential requirements and process documents </p></motion.div>
              )}</motion.div>
            </td>
          
            <td><motion.div className="card" onClick={()=> setIsOpencomplevel1(!isOpencomplevel1)& setIsOpencomplevel3(!isOpencomplevel3)}>
              <motion.h3>Level 2</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomplevel3(!isOpencomplevel3)}>
              <motion.h3>Level 3</motion.h3>
              {isOpencomplevel3 &&(
              <motion.div> <p>The project contains most essential requirements and does not have process documents </p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomplevel3(!isOpencomplevel3)& setIsOpencomplevel5(!isOpencomplevel5)}>
              <motion.h3>Level 4</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomplevel5(!isOpencomplevel5)}>
              <motion.h3>Level 5</motion.h3>
             {isOpencomplevel5 &&(
             <motion.div> <p>The project contains most essential requirements and process documents </p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomplevel5(!isOpencomplevel5)& setIsOpencomplevel7(!isOpencomplevel7)}>
                <motion.h3>Level 6</motion.h3></motion.div>
            </td>

            <td>
              <motion.div className="card" onClick={()=> setIsOpencomplevel7(!isOpencomplevel7)}>
              <motion.h3>Level 7</motion.h3>
              {isOpencomplevel7 &&(
              <motion.div> <p>The project contains all essential requirements and process documents </p></motion.div>
              )}</motion.div>
            </td>
          </tr>
        </tbody>
      </table>
<br></br>
      <table className="centeredtable">
        <tbody>
          <tr>
            <td colSpan="7"><motion.div color='red' transition={{layout: {duration: 1, type:"spring"}}} layout className="carda" onClick={()=> setIsOpencomp1(!isOpencomp1)}>
              <motion.h3 layout="position">Understanding of the concept </motion.h3>
              {isOpencomp1 &&(
              <motion.div> <p><img src={comp1} alt="comp1"></img> <br></br>This component of rubrics shows the progression in the Understanding of the project  </p></motion.div>
              )}</motion.div>
            </td>
          </tr>
         
          <tr>
            <td><motion.div className="card" onClick={()=> setIsOpencomp1level1(!isOpencomp1level1)}>
              <motion.h3>Level 1</motion.h3>
              {isOpencomp1level1 &&(
              <motion.div> <p>Project does not contains demonstrate basic learning goals <br></br> The student has demonstrated unsderstanding of few concepts </p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp1level1(!isOpencomp1level1)& setIsOpencomp1level3(!isOpencomp1level3)}>
              <motion.h3>Level 2</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp1level3(!isOpencomp1level3)}>
              <motion.h3>Level 3</motion.h3>
              {isOpencomp1level3 &&(
              <motion.div> <p>Project demonstrates some of the desired learning goals. The student has demonstrated
              an in-depth understanding of some concepts and attempts to apply them appropriately. </p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp1level3(!isOpencomp1level3)& setIsOpencomp1level5(!isOpencomp1level5)}>
              <motion.h3>Level 4</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp1level5(!isOpencomp1level5)}>
              <motion.h3>Level 5</motion.h3>
              {isOpencomp1level5 &&(
              <motion.div> <p>Project demonstrates most of the desired learning goals. The student has demonstrated an in-depth understanding of
              most concepts and applied them appropriately </p></motion.div>
              )}</motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp1level5(!isOpencomp1level5)& setIsOpencomp1level7(!isOpencomp1level7)}>
              <motion.h3>Level 6</motion.h3></motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp1level7(!isOpencomp1level7)}>
              <motion.h3>Level 7</motion.h3>
              {isOpencomp1level7 &&(
              <motion.div> <p>Project demonstrates all desired learning goals. The student has demonstrated an in-depth understanding of
              all concepts and applied them appropriately.</p></motion.div>
              )}</motion.div>
            </td>
          </tr>
        </tbody>
      </table>
      
      <br></br>
      <table className="centeredtable">
        <tbody>
          <tr>
            <td colSpan="7"><motion.div color='red' transition={{layout: {duration: 1, type:"spring"}}} layout className="carda" onClick={()=> setIsOpencomp2(!isOpencomp2)}>
              <motion.h3 layout="position">Information Gathering </motion.h3>
              {isOpencomp2 &&(
              <motion.div> <p><img src={comp2} alt="comp2"></img> <br></br>This competency of rubrics shows the progression in process of Information gathering and collection  </p></motion.div>
              )}</motion.div>
            </td>
          </tr>
         
          <tr>
            <td><motion.div className="card" onClick={()=> setIsOpencomp2level1(!isOpencomp2level1)}>
              <motion.h3>Level 1</motion.h3>
              {isOpencomp2level1 &&(
              <motion.div> <p>Needs help to find facts, data and evidences  </p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp2level1(!isOpencomp2level1)& setIsOpencomp2level3(!isOpencomp2level3)}>
              <motion.h3>Level 2</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp2level3(!isOpencomp2level3)}>
              <motion.h3>Level 3</motion.h3>
              {isOpencomp2level3 &&(
              <motion.div> <p>Is able to find some relevant facts, data and evidences from limited sources </p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp2level3(!isOpencomp2level3)& setIsOpencomp2level5(!isOpencomp1level5)}>
              <motion.h3>Level 4</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp2level5(!isOpencomp2level5)}>
              <motion.h3>Level 5</motion.h3>
              {isOpencomp2level5 &&(
              <motion.div> <p>Finds most relevant facts, data and evidences from multiple sources.</p></motion.div>
              )}</motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp2level5(!isOpencomp2level5)& setIsOpencomp2level7(!isOpencomp2level7)}>
              <motion.h3>Level 6</motion.h3></motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp2level7(!isOpencomp2level7)}>
              <motion.h3>Level 7</motion.h3>
              {isOpencomp2level7 &&(
              <motion.div> <p>Finds all relevant facts, data and evidences from multiple sources and prior experience"</p></motion.div>
              )}</motion.div>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <table className="centeredtable">
        <tbody>
          <tr>
            <td colSpan="7"><motion.div color='red' transition={{layout: {duration: 1, type:"spring"}}} layout className="carda" onClick={()=> setIsOpencomp3(!isOpencomp3)}>
              <motion.h3 layout="position">Communication Skills </motion.h3>
              {isOpencomp3 &&(
              <motion.div> <p><img src={comp3} alt="comp3"></img> <br></br>This competency of rubrics shows the communication skills  </p></motion.div>
              )}</motion.div>
            </td>
          </tr>
         
          <tr>
            <td><motion.div className="card" onClick={()=> setIsOpencomp3level1(!isOpencomp3level1)}>
              <motion.h3>Level 1</motion.h3>
              {isOpencomp3level1 &&(
              <motion.div> <p>Unacceptable structure, grammar and use of words. Message is unclear. Unacceptable pace, volume
              and expression (verbal). </p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp3level1(!isOpencomp2level1)& setIsOpencomp3level3(!isOpencomp3level3)}>
              <motion.h3>Level 2</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp3level3(!isOpencomp3level3)}>
              <motion.h3>Level 3</motion.h3>
              {isOpencomp3level3 &&(
              <motion.div> <p>Just acceptable structure, grammar and use of words. Message lacks some clarity. Just acceptable pace, volume
              and expression (verbal).</p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp3level3(!isOpencomp3level3)& setIsOpencomp3level5(!isOpencomp3level5)}>
              <motion.h3>Level 4</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp3level5(!isOpencomp3level5)}>
              <motion.h3>Level 5</motion.h3>
              {isOpencomp3level5 &&(
              <motion.div> <p>Appropriate structure, grammar and use of words. Message is clear. Appropriate pace, volume and
              expression (verbal)."</p></motion.div>
              )}</motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp3level5(!isOpencomp3level5)& setIsOpencomp3level7(!isOpencomp3level7)}>
              <motion.h3>Level 6</motion.h3></motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp3level7(!isOpencomp3level7)}>
              <motion.h3>Level 7</motion.h3>
              {isOpencomp3level7 &&(
              <motion.div> <p>Appropriate structure, grammar; use and choice of words. Message is clear and concise. Appropriate pace, volume and
              expression (verbal).</p></motion.div>
              )}</motion.div>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>

      <table className="centeredtable">
        <tbody>
          <tr>
            <td colSpan="7"><motion.div color='red' transition={{layout: {duration: 1, type:"spring"}}} layout className="carda" onClick={()=> setIsOpencomp4(!isOpencomp4)}>
              <motion.h3 layout="position">Listens, Reads, Views. </motion.h3>
              {isOpencomp4 &&(
              <motion.div> <p><img src={comp4} alt="comp4"></img> <br></br>This competency of rubrics shows the Listens, Reads, Views. </p></motion.div>
              )}</motion.div>
            </td>
          </tr>
         
          <tr>
            <td><motion.div className="card" onClick={()=> setIsOpencomp4level1(!isOpencomp4level1)}>
              <motion.h3>Level 1</motion.h3>
              {isOpencomp4level1 &&(
              <motion.div> <p>Unacceptable structure, grammar and use of words. Message is unclear. Unacceptable pace, volume
              and expression (verbal). </p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp4level1(!isOpencomp4level1)& setIsOpencomp4level3(!isOpencomp4level3)}>
              <motion.h3>Level 2</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp4level3(!isOpencomp4level3)}>
              <motion.h3>Level 3</motion.h3>
              {isOpencomp4level3 &&(
              <motion.div> <p>Comprehends a few key points and is able to summarize them. Needs assistance in identifying the implied (hidden) message.</p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp4level3(!isOpencomp4level3)& setIsOpencomp4level5(!isOpencomp4level5)}>
              <motion.h3>Level 4</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp4level5(!isOpencomp4level5)}>
              <motion.h3>Level 5</motion.h3>
              {isOpencomp4level5 &&(
              <motion.div> <p>Comprehends most of the message and is able to summarize it. Is able to identify the implied           (hidden) message.
              Distinguishes some facts from opinions.</p></motion.div>
              )}</motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp4level5(!isOpencomp4level5)& setIsOpencomp4level7(!isOpencomp4level7)}>
              <motion.h3>Level 6</motion.h3></motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp4level7(!isOpencomp4level7)}>
              <motion.h3>Level 7</motion.h3>
              {isOpencomp4level7 &&(
              <motion.div> <p>Completely comprehends the message and is able to summarize it. Is able to identify and understand the implied
              (hidden) messages. Distinguishes all facts from opinions.</p></motion.div>
              )}</motion.div>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>

      <table className="centeredtable">
        <tbody>
          <tr>
            <td colSpan="7"><motion.div color='red' transition={{layout: {duration: 1, type:"spring"}}} layout className="carda" onClick={()=> setIsOpencomp5(!isOpencomp5)}>
              <motion.h3 layout="position">Team work </motion.h3>
              {isOpencomp5 &&(
              <motion.div> <p><img src={comp5} alt="comp5"></img> <br></br>This competency of rubrics shows the Listens, Reads, Views. </p></motion.div>
              )}</motion.div>
            </td>
          </tr>
         
          <tr>
            <td><motion.div className="card" onClick={()=> setIsOpencomp5level1(!isOpencomp5level1)}>
              <motion.h3>Level 1</motion.h3>
              {isOpencomp5level1 &&(
              <motion.div> <p>Minimal contribution to teamwork. Has difficulty being supportive and respectful of others</p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp5level1(!isOpencomp5level1)& setIsOpencomp5level3(!isOpencomp5level3)}>
              <motion.h3>Level 2</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp5level3(!isOpencomp5level3)}>
              <motion.h3>Level 3</motion.h3>
              {isOpencomp5level3 &&(
              <motion.div> <p>Some contribution to teamwork. Has some difficulty being supportive and respectful of others.</p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp5level3(!isOpencomp5level3)& setIsOpencomp5level5(!isOpencomp5level5)}>
              <motion.h3>Level 4</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp5level5(!isOpencomp5level5)}>
              <motion.h3>Level 5</motion.h3>
              {isOpencomp5level5 &&(
              <motion.div> <p>"Positive contribution to teamwork. Respectful and supportive of others.</p></motion.div>
              )}</motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp5level5(!isOpencomp5level5)& setIsOpencomp5level7(!isOpencomp5level7)}>
              <motion.h3>Level 6</motion.h3></motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp5level7(!isOpencomp5level7)}>
              <motion.h3>Level 7</motion.h3>
              {isOpencomp5level7 &&(
              <motion.div> <p>Positive and effective contribution to teamwork. Motivated, respectful and supportive of others.</p></motion.div>
              )}</motion.div>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>

      <table className="centeredtable">
        <tbody>
          <tr>
            <td colSpan="7"><motion.div color='red' transition={{layout: {duration: 1, type:"spring"}}} layout className="carda" onClick={()=> setIsOpencomp6(!isOpencomp6)}>
              <motion.h3 layout="position">Interpersonal Skills</motion.h3>
              {isOpencomp6 &&(
              <motion.div> <p><img src={comp6} alt="comp6"></img> <br></br>This competency of rubrics shows Interpersonal Skills. </p></motion.div>
              )}</motion.div>
            </td>
          </tr>
         
          <tr>
            <td><motion.div className="card" onClick={()=> setIsOpencomp6level1(!isOpencomp6level1)}>
              <motion.h3>Level 1</motion.h3>
              {isOpencomp6level1 &&(
              <motion.div> <p>"Sometimes interacts in a friendly manner.
              Rarely listens and shows respect for other’s ideas</p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp6level1(!isOpencomp6level1)& setIsOpencomp6level3(!isOpencomp6level3)}>
              <motion.h3>Level 2</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp6level3(!isOpencomp6level3)}>
              <motion.h3>Level 3</motion.h3>
              {isOpencomp6level3 &&(
              <motion.div> <p>Usually interacts in a friendly manner. Occasionally listens and
              responds respectfully to other’s ideas</p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp6level3(!isOpencomp6level3)& setIsOpencomp6level5(!isOpencomp6level5)}>
              <motion.h3>Level 4</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp6level5(!isOpencomp6level5)}>
              <motion.h3>Level 5</motion.h3>
              {isOpencomp6level5 &&(
              <motion.div> <p>Always interacts in a friendly manner. Usually listens and responds
              respectfully to other’s ideas</p></motion.div>
              )}</motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp6level5(!isOpencomp6level5)& setIsOpencomp6level7(!isOpencomp6level7)}>
              <motion.h3>Level 6</motion.h3></motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp6level7(!isOpencomp6level7)}>
              <motion.h3>Level 7</motion.h3>
              {isOpencomp6level7 &&(
              <motion.div> <p>Always interacts in a friendly manner. Always listens to other’s view
              points and responds respectfully. Is always approachable.</p></motion.div>
              )}</motion.div>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>

      <table className="centeredtable">
        <tbody>
          <tr>
            <td colSpan="7"><motion.div color='red' transition={{layout: {duration: 1, type:"spring"}}} layout className="carda" onClick={()=> setIsOpencomp7(!isOpencomp7)}>
              <motion.h3 layout="position">Responsibility </motion.h3>
              {isOpencomp7 &&(
              <motion.div> <p><img src={comp7} alt="comp7"></img> <br></br>This competency of rubrics shows Responsibility. </p></motion.div>
              )}</motion.div>
            </td>
          </tr>
         
          <tr>
            <td><motion.div className="card" onClick={()=> setIsOpencomp7level1(!isOpencomp7level1)}>
              <motion.h3>Level 1</motion.h3>
              {isOpencomp7level1 &&(
              <motion.div> <p>Occasionally punctual, prepared, and organized. Needs constant reminders to complete the assigned tasks" </p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp7level1(!isOpencomp7level1)& setIsOpencomp7level3(!isOpencomp7level3)}>
              <motion.h3>Level 2</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp7level3(!isOpencomp7level3)}>
              <motion.h3>Level 3</motion.h3>
              {isOpencomp7level3 &&(
              <motion.div> <p>Usually punctual, prepared, and organized. Needs some reminders to complete the assigned tasks.</p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp7level3(!isOpencomp7level3)& setIsOpencomp7level5(!isOpencomp7level5)}>
              <motion.h3>Level 4</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp7level5(!isOpencomp7level5)}>
              <motion.h3>Level 5</motion.h3>
              {isOpencomp7level5 &&(
              <motion.div> <p>Always punctual. Mostly prepared and organized. Sometimes takes initiatives to complete the assigned tasks</p></motion.div>
              )}</motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp7level5(!isOpencomp7level5)& setIsOpencomp7level7(!isOpencomp7level7)}>
              <motion.h3>Level 6</motion.h3></motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp7level7(!isOpencomp7level7)}>
              <motion.h3>Level 7</motion.h3>
              {isOpencomp7level7 &&(
              <motion.div> <p>Always punctual, prepared and organized. Always takes initiatives to
              complete the assigned tasks.</p></motion.div>
              )}</motion.div>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>

      <table className="centeredtable">
        <tbody>
          <tr>
            <td colSpan="7"><motion.div color='red' transition={{layout: {duration: 1, type:"spring"}}} layout className="carda" onClick={()=> setIsOpencomp8(!isOpencomp8)}>
              <motion.h3 layout="position">Problem Solving / Critical Thinking</motion.h3>
              {isOpencomp8 &&(
              <motion.div> <p><img src={comp8} alt="comp8"></img> <br></br>This competency of rubrics shows Problem Solving / Critical Thinking. </p></motion.div>
              )}</motion.div>
            </td>
          </tr>
         
          <tr>
            <td><motion.div className="card" onClick={()=> setIsOpencomp8level1(!isOpencomp8level1)}>
              <motion.h3>Level 1</motion.h3>
              {isOpencomp8level1 &&(
              <motion.div> <p>Always needs help to think through a problem and offer
              appropriate solutions. Always needs support to analyze the main issue. </p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp8level1(!isOpencomp8level1)& setIsOpencomp8level3(!isOpencomp8level3)}>
              <motion.h3>Level 2</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp8level3(!isOpencomp8level3)}>
              <motion.h3>Level 3</motion.h3>
              {isOpencomp8level3 &&(
              <motion.div> <p>"Needs help to think through a problem. Sometimes offers appropriate
              solutions. Sometimes analyzes the main issue.</p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp8level3(!isOpencomp8level3)& setIsOpencomp8level5(!isOpencomp8level5)}>
              <motion.h3>Level 4</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp8level5(!isOpencomp8level5)}>
              <motion.h3>Level 5</motion.h3>
              {isOpencomp8level5 &&(
              <motion.div> <p>"Is able to correctly think through a problem. Usually offers appropriate
              solutions. Analyzes the main issue and can identify some of its reasons / effects.</p></motion.div>
              )}</motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp8level5(!isOpencomp8level5)& setIsOpencomp8level7(!isOpencomp8level7)}>
              <motion.h3>Level 6</motion.h3></motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp8level7(!isOpencomp8level7)}>
              <motion.h3>Level 7</motion.h3>
              {isOpencomp8level7 &&(
              <motion.div> <p>"Is able to correctly think through a problem. Offers (multiple) appropriate solutions. Analyzes the main issue and
              can identify most of its reasons/ effects."</p></motion.div>
              )}</motion.div>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>

      <table className="centeredtable">
        <tbody>
          <tr>
            <td colSpan="7"><motion.div color='red' transition={{layout: {duration: 1, type:"spring"}}} layout className="carda" onClick={()=> setIsOpencomp9(!isOpencomp9)}>
              <motion.h3 layout="position">Creativity and Innovation </motion.h3>
              {isOpencomp9 &&(
              <motion.div> <p><img src={comp9} alt="comp9"></img> <br></br>This competency of rubrics shows Creativity and Innovation. </p></motion.div>
              )}</motion.div>
            </td>
          </tr>
         
          <tr>
            <td><motion.div className="card" onClick={()=> setIsOpencomp9level1(!isOpencomp9level1)}>
              <motion.h3>Level 1</motion.h3>
              {isOpencomp9level1 &&(
              <motion.div> <p>Work is original. Needs help in creative design.</p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp9level1(!isOpencomp9level1)& setIsOpencomp9level3(!isOpencomp9level3)}>
              <motion.h3>Level 2</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp9level3(!isOpencomp9level3)}>
              <motion.h3>Level 3</motion.h3>
              {isOpencomp9level3 &&(
              <motion.div> <p>"Work is original. Needs some help in creative design. Is sometimes able to independently produce new ideas / solutions"</p></motion.div>
              )}</motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp9level3(!isOpencomp9level3)& setIsOpencomp9level5(!isOpencomp9level5)}>
              <motion.h3>Level 4</motion.h3></motion.div>
            </td>

            <td><motion.div className="card" onClick={()=> setIsOpencomp9level5(!isOpencomp9level5)}>
              <motion.h3>Level 5</motion.h3>
              {isOpencomp9level5 &&(
              <motion.div> <p>"Work is original. Work is independently creative in design.
              Is usually able to  independently produce new and well developed ideas / solutions."</p></motion.div>
              )}</motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp9level5(!isOpencomp9level5)& setIsOpencomp9level7(!isOpencomp9level7)}>
              <motion.h3>Level 6</motion.h3></motion.div>
            </td>
            
            <td><motion.div className="card" onClick={()=> setIsOpencomp9level7(!isOpencomp9level7)}>
              <motion.h3>Level 7</motion.h3>
              {isOpencomp9level7 &&(
              <motion.div> <p>Work is original. Work is independently creative in design.
              Is always able to independently produce new and well developed ideas / solutions."</p></motion.div>
              )}</motion.div>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>



      </div>
     
    
    )
    
  }
  
 export default Detailrub;
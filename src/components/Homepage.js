import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import vision from './img/vision.png';
import akueblogo from './img/akueblogo.png';
import pakimg from './img/pakimg.png';
import '../App.css';
import rubrics from './img/rubrics.png';
import missa from './img/missa.png';
import missb from './img/missb.png';
import missc from './img/missc.png';
import mission from "./img/mission.png";
import login from './img/login.png';
import Login from "../components/login/Login";
import Slider from './Slider.js';


function Homepage() {
  const [modal, setmodal] = useState(false)
  function closeItem() {
    setmodal();
  }
  const [modalmission, setmodalmission] = useState(false)
  function closeItemmission() {
    setmodalmission();
  }
  const [modallogin, setmodallogin] = useState(false)
  function closeItemlogin() {
    setmodallogin();
  }

  const navigate = useNavigate();
  function goToRubrics() {
    navigate("/Detailrub")
  }


  return (
    <>
      <div align="center">This is Home page </div>



      <Modal className="centered" isOpen={modal}
        toggle={() => setmodal(!modal)}>
        <ModalHeader>
          <div align='right'>  <button className="cancelbtn" onClick={closeItem}>X</button></div><br></br>
          <img className='responsive' src={akueblogo} alt='akueblogo'></img>

        </ModalHeader>
        <ModalBody>

          <img className='responsive' src={pakimg} alt="pakimg"></img>

          <ul className="topnav">To be a model of excellence and inovation in education in Pakistan and developing countries</ul>

        </ModalBody>

      </Modal>
      <Modal className="centered" isOpen={modalmission}
        toggle={() => setmodalmission(!modalmission)}>
        <ModalHeader>
          <div align='right'> <button className="cancelbtn" onClick={closeItemmission}>X</button></div>
          <img className='responsive' src={akueblogo} alt="akueblogo"></img>
        </ModalHeader>
        <ModalBody>
          <table>
            <tbody>
              <tr>
                <td><img className='responsive' src={missa} alt="missa"></img></td>
                <td><ul className='topnav'>To increase access to quality education for lower-and-middle income students at a secondary and higher secondary level</ul></td>
              </tr>
              <tr>
                <td><img className='responsive' src={missb} alt="missb"></img></td>
                <td><ul className='topnav'>To inculcate a culture of higher order thinking in the youth through indigenous educational development and assessment programmes</ul></td>
              </tr>
              <tr>
                <td><img className='responsive' src={missc} alt="missc"></img></td>
                <td><ul className='topnav'>To acquire new knowledge through research and share best practices in education</ul></td>
              </tr>
            </tbody>
          </table>

        </ModalBody>

      </Modal>
      <Modal isOpen={modallogin}
        toggle={() => setmodallogin(!modallogin)}>
        <ModalHeader>
          <div align='right'> <button className="cancelbtn" onClick={closeItemlogin}>X</button></div><br></br>
          <img className='responsive' src={akueblogo} alt="akueblogo"></img>

        </ModalHeader>
        <ModalBody>
          <Login />
        </ModalBody>


      </Modal>



      <table align="center">
        <tbody>
          <tr>
            <td className="zoomin frame"> <img onClick={() => setmodal(true)} src={vision} alt='vision'></img></td>
            <td className="zoomin frame"><img onClick={() => setmodalmission(true)} src={mission} alt='mission'></img></td>
            <td className="zoomin frame"><img onClick={goToRubrics} src={rubrics} alt="rubrics"></img></td>
            <td className="zoomin frame"><img onClick={() => setmodallogin(true)} src={login} alt='login'></img></td>
          </tr>
        </tbody>
      </table>
      <Slider />
    </>
  )
}
export default Homepage;
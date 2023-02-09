import React, { useEffect, useState } from 'react';


import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import comp1 from '../img/comp1.png';
import { Modal, } from "reactstrap";




const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);

            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }


    const userlogout = () => {
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, []);


    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>

                        <h3>Welcome {logindata[0].name}<Button className='cancelbtn' onClick={userlogout}>LogOut</Button></h3>


                        {
                            logindata[0].date === todayDate ?
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal> : ""
                        }

                        <div>

                        </div>
                        <table align='center'>
                            <tbody>
                                <tr>
                                    <td><img src={comp1} alt="comp1"></img></td>
                                    <td><Link to='/ClassVI'><button>Class VI</button></Link></td>
                                </tr>

                                <tr>
                                    <td><img src={comp1} alt="comp1"></img></td>
                                    <td><Link to='/ClassVII'><button>Class VII</button></Link></td>
                                </tr>

                                <tr>
                                    <td><img src={comp1} alt="comp1"></img></td>
                                    <td><Link  to='/ClassVIII'><button>Class VIII</button></Link></td>
                                </tr>

                            </tbody>
                        </table>

                    </>

            }
        </>
    )
}

export default Details;























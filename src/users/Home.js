
import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
        <div className="logo">UIUXCX.com</div>
        <div className="pop"> </div>
        <div className="mainContainer">

            <div className="user1">
                <Link to="/abhay">
                    <div className="userDetails">
                        <div className="userImage usr1"></div>
                        <h1 className="userName">Abhay Narnaware</h1>
                        <h3 className="designation">Sr. Front End Developer</h3>
                    </div>
                </Link>
            </div>
            <div className="user2">
            <Link to="/kanchan">
                <div className="userDetails">
                    <div className="userImage usr2"></div>
                    <h1 className="userName">Kanchan Kawadkar</h1>
                    <h3 className="designation">UI/UX Designer</h3>
                </div>
                </Link>
            </div>
        </div>
    </>


);

export default Home;

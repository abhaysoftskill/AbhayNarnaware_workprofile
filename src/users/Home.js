
import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
        <div class="pop"> </div>
        <div className="container">

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
                <div className="userDetails">
                    <div className="userImage"></div>
                    <h1 className="userName">Kanchan Kawadkar</h1>
                    <h3 className="designation">UI/UX Designer</h3>
                </div>
            </div>
        </div>
    </>


);

export default Home;

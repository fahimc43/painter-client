import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import logo from '../../images/google.png';
import brandLogo from '../../images/brandLogo.png';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className="container mt-5">
            <div style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "20%"
            }}>
                <img src={brandLogo} alt="" />
            </div>
            <div className="form mt-5">
                <h2>Login</h2>
                <div onClick={handleGoogleSignIn} className="login-area">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="login-text">
                        <p>Continue with Google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
/*import React, { Component } from 'react';

export default class Login extends Component {
  
  render() {
    
    return (
        <div>
            <div className="wrapper">
                   Login
            </div>
        </div>
    )

  }
}

*/
import React, { useState,useEffect } from 'react';
import fb from '../../fb';
import Form from './form';
import Profile from '../profile';
import "./style.css";

function Login() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState();
  const [hasAccount, setHasAccount] = useState('');


const clearInputs = () => {
  setEmail('');
  setPassword('');
}

const clearErrors = () => {
  setEmailError('');
  setPasswordError('');
}

  const handleLogin = () => {
    clearErrors();
      fb
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;  
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fb
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;  
      }
    });
};  

const handleLogout = () => {
  fb.auth().signOut();
};

const authListener = () => {
  fb.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
  });
};

useEffect(() => {
  authListener();
}, []);

  return (
    <div className="App">
      {user ? (
        <Profile handleLogout={handleLogout} />
      ):(
        <Form 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default Login;

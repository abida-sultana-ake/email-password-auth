import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import React, { useState } from "react";
import { Link } from "react-router";

const LogIn = () => {
    const [success, setSucess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const handleLogIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        // reset 
        setSucess(false)
        setErrorMessage('')

        // login
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log("Error:", error);
            setErrorMessage(error.message)
        });
    }

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              This is LogIn Form BMW
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-2xl font-bold">Login now!</h1>
              <form onSubmit={handleLogIn} className="fieldset">
                <label className="label" >Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <p>New to this website? Please <Link to="/SignUp" className="text-blue-500 underline">Sign Up</Link> </p>
              {
                errorMessage && <p className="text-red-600">{errorMessage}</p>
              }
              {
                success && <p className="text-green-500">User logIn Successfully</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
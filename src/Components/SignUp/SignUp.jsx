import { getAuth, signOut } from "firebase/auth";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);

    if(!terms)
    {
      setErrorMessage("Please Accept Our terms and Conditions");
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters, include a number, a lowercase and an uppercase letter."
      );
      return;
    }

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign out Successfully");
      })
      .catch((error) => {
        console.log("Error:", error);
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSignUp}
        className="hero-content flex-col lg:flex-row-reverse"
      >
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-blue-600 text-3xl font-bold">
              Registration Now!
            </h1>
            <form className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  minLength="8"
                />
                <button
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="btn btn-xs absolute top-2 right-6"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <div>
                <label className="label">
                  <input type="checkbox"  className="checkbox mt-3" />
                  Accept Terms and Conditions 
                </label>
                <p className="mt-3">Already have an account? Please <Link className="text-blue-400 underline" to="/login"> LogIn </Link></p>
              </div>
              <button
                type="submit"
                className="btn btn-neutral bg-blue-700 border-blue-700 mt-4"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </form>
      
    </>
  );
};

export default SignUp;

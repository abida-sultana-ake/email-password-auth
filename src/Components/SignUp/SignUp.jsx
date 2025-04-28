import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setErrorMessage('');
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
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />
                At least one number <br />
                At least one lowercase letter <br />
                At least one uppercase letter
              </p>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn btn-neutral bg-blue-700 border-blue-700 mt-4"
              >
                Sign Out
              </button>
            </fieldset>
          </div>
        </div>
      </form>

      {errorMessage && <p className="text-3xl text-red-500">{errorMessage}</p>}
    </>
  );
};

export default SignUp;

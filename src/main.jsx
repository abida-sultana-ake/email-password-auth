import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layout/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import LogIn from "./Components/LogIn/LogIn.jsx";
import Register from "./Components/Register/Register.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: LogIn },
      { path: "register", Component: Register },
      { path: "SignUp", Component: SignUp },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

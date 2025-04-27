import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layout/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import LogIn from "./Components/LogIn/LogIn.jsx";
import Register from "./Components/Register/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home },
      {path: 'login', Component: LogIn},
      {path: 'register', Component: Register}
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// git remote add origin https://github.com/abida-sultana-ake/email-password-auth.git
// git branch -M main
// git push -u origin main

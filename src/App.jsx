// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import our custom CSS
import './scss/styles.scss'

import Profile from "./profile";
import Home from "./home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ],
  { basename: "/lucky/" }
);

export default function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

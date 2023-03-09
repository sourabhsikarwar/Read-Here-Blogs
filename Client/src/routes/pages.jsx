import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Write from "../pages/Write"
import Single from "../pages/Single"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/write',
        element: <Write/>
      },
      {
        path: '/post/:id',
        element: <Single/>
      },
    ]
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
]);

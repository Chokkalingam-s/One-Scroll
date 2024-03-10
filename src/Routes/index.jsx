import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ConnectionLayout from "../layouts/ConnectionLayout";
import NotificationLayout from "../layouts/NotificationLayout";
import ContactUsLayout from "../layouts/ContactUsLayout";
import NotesLayout from "../layouts/NotesLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
  },
  {
    path: "/connections",
    element: <ConnectionLayout />,
  },
  {
    path: "/notifications",
    element: <NotificationLayout />,
  },
  {
    path:"/ContactUs",
    element:<ContactUsLayout />
  },
  { 
    path:"Notes",
    element: <NotesLayout />
    
  },
]);

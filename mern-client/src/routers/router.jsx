import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Blog from "../components/Blog";
import About from "../components/About";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import SingleBook from "../shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/signUp";
import Logout from "../components/Logout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/shop",
            element:<Shop/>
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
          path:"/book/:id",
          element:<SingleBook/>,
          loader:({params})=> fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashBoardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<DashBoard/>,
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBooks/>,
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>,
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader:({params})=> fetch(`http://localhost:5000/book/${params.id}`)
        },
        {
          path:"/admin/dashboard/logout",
          element:<Logout/>
        }
      ]
    },
    {
      path:"sign-up",
      element:<SignUp/>
    }
  ]);

  export default router;
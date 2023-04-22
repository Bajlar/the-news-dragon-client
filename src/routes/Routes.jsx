import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../shared/Login/Login/Login";
import Register from "../shared/Login/Register/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'category',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: ':id',
        element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: 'news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: <News></News>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
])

export default router;
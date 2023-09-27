import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserInfo from "./pages/userInfo/UserInfo";
import ProductInfo from "./pages/productInfo/ProductInfo";
function App() {
  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='container'>
          <div className='menuContainer'>
            <Menu />
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <UserInfo />,
        },
        {
          path: "/products/:id",
          element: <ProductInfo />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

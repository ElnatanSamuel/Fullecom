import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import Products from "./components/pages/products/Products";
import CartPage from "./components/pages/CartPage/CartPage";
import { Login } from "@mui/icons-material";
import LoginReg from "./components/pages/LoginReg/LoginReg";
import Product from "./components/pages/Product/Product";
import Checkout from "./components/pages/Checkout/Checkout";
import Payment from "./components/pages/Payment/Payment";
import UserAccount from "./components/pages/UserAccount/UserAccount";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
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
        element: <Homepage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/account",
        element: <LoginReg />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/checkout/payment",
        element: <Payment />,
      },
      {
        path: "/account/user",
        element: <UserAccount />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

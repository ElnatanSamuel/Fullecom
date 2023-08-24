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
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import { useSelector } from "react-redux";
import OrderDetail from "./components/pages/OrderDetail/OrderDetail";

const Layout = () => {
  const [loggedUserEmail, etLoggedUserEmail] = useState("");
  const [loggedUsername, setLoggedUsername] = useState("");

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
        path: "/account/user",
        element: <UserAccount />,
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
        path: "/useraccount/orderdetail",
        element: <OrderDetail />,
      },
    ],
  },
]);

function App() {
  const subtotalAmount = useSelector((state) => state.cart.subTotalAmount);
  const [priceSubTotal, setPriceSubtotal] = useState(0);
  const [categoryItems, setCategoryItems] = useState("");
  const [brandCategoryItems, setBrandCategoryItems] = useState("");
  const [maxPrice, setMaxPrice] = useState(10);
  const [shippingMethod, setShippingMethod] = useState(0);
  const [grandTotal, setGrandTotal] = useState(subtotalAmount);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingRegion, setShippingRegion] = useState("");
  const [formNotPassed, setFormNotPassed] = useState(false);
  const [areItemsInCart, setAreItemsInCart] = useState(true);
  const [fieldsEmpty, setFieldsEmpty] = useState(false);
  const [paymentProcessed, setPaymentProcessed] = useState(false);
  const [paymentError, setPaymentError] = useState(false);

  return (
    <CartContext.Provider
      value={{
        paymentError,
        setPaymentError,
        paymentProcessed,
        setPaymentProcessed,
        fieldsEmpty,
        setFieldsEmpty,
        areItemsInCart,
        setAreItemsInCart,
        setFormNotPassed,
        formNotPassed,
        shippingCountry,
        setShippingCountry,
        shippingRegion,
        setShippingRegion,
        priceSubTotal,
        setPriceSubtotal,
        categoryItems,
        setCategoryItems,
        brandCategoryItems,
        setBrandCategoryItems,
        maxPrice,
        setMaxPrice,
        shippingMethod,
        setShippingMethod,
        grandTotal,
        setGrandTotal,
        fullName,
        setFullName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        streetName,
        setStreetName,
        city,
        setCity,
        postalCode,
        setPostalCode,
      }}
    >
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </CartContext.Provider>
  );
}

export default App;

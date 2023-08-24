import React, { useEffect, useState } from "react";
import "./UserAccount.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logUserOut } from "../../../redux/UserSlice";
import axios from "axios";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import { addOrderDetail } from "../../../redux/OrderSilce";

const UserAccount = () => {
  const UserEmail = useSelector((state) => state.user.userEmail);
  const FirstName = useSelector((state) => state.user.userFirstName);
  const LastName = useSelector((state) => state.user.userLastName);
  const [orderData, setOrderData] = useState([]);
  const [noOrder, setNoOrder] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigate("/");
    dispatch(logUserOut());
  };

  const handleOrderDiaplay = (item) => {
    dispatch(addOrderDetail(item));
    navigate("/useraccount/orderdetail");
  };

  useEffect(() => {
    axios
      .post(
        "http://ecomserver.elnatandev.elnatansamueldev.com/api/account/user/orders",
        { UserEmail }
      )
      .then((res) => {
        setOrderData(res.data.previousOrders);
        setNoOrder(res.json.noOrders);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl m-auto mt-10 px-8">
      <div className="accountuserwrapper">
        <h1>Manage Account</h1>
        <div className="accountuser">
          <p>
            Name:{" "}
            <span>
              {FirstName} {LastName}
            </span>
          </p>
          <p>
            Email: <span>{UserEmail}</span>
          </p>
          <div className="accountuserbtns"></div>
        </div>

        <div className="trackorderuser">
          <h1>Track orders</h1>

          <div className="trackorderuserwrapper">
            {orderData !== [] ? (
              orderData?.map((item) => (
                <div
                  className="ordertracker"
                  onClick={(e) => handleOrderDiaplay(item)}
                >
                  <div className="ticketpart">
                    <div className="ticketicons">
                      <ConfirmationNumberOutlinedIcon className="ticketicon" />
                    </div>
                    <div className="leftticket">
                      <p>Order number:</p>
                      <span>{item.orderNumber}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="font-bold text-lg opacity-50">
                No orders retrieved
              </p>
            )}
          </div>
        </div>
        <button className="logoutbutton" onClick={() => handleLogout()}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserAccount;

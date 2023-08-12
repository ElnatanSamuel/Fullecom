import React from "react";
import "./UserAccount.scss";

const UserAccount = () => {
  return (
    <div className="max-w-7xl m-auto mt-10 px-8">
      <div className="accountuserwrapper">
        <h1>Manage Account</h1>
        <div className="accountuser">
          <p>
            Name: <span>John Doe</span>
          </p>
          <p>
            Email: <span>johndoe@gmail.com</span>
          </p>
          <div className="accountuserbtns">
            <button className="bg-blue-400">Change password</button>
            <button className="bg-red-500">Delete account</button>
          </div>
        </div>

        <div className="trackorderuser">
          <h1>Track orders</h1>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;

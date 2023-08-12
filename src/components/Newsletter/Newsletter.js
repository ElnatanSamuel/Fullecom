import React from "react";
import "./Newletter.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Newsletter = () => {
  return (
    <div className="newswrapper">
      <h1>
        Subscribe to our newsletter to get updates to our latest collections
      </h1>
      <p className="desc">
        Get 20% off on your first order just by subscribing to our newsletter
      </p>
      <div className="newsform">
        <input type="text" placeholder="Enter your email" />
        <EmailOutlinedIcon className="mailicon" />
        <button>Subscribe</button>
      </div>

      <div className="terms">
        <p>You will be able to unsubscribe at any time</p>
        <p>
          Read our privacy policy <span>here</span>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;

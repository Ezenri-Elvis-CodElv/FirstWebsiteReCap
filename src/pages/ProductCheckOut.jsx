import { Link } from "react-router-dom";
import "./productcheckout.css";

const ProductCheckout = () => {
  return (
    <div className="chekoutwrapper">
      <div className="checkoutwrapperbody">
        <h2>Checkout</h2>
        <div className="checkouttextwrapper">
          <p className="hometext">Home</p>
          <p>Checkout</p>
        </div>
      </div>

      <div className="container">
        {/* Returning Customer Section */}
        <div className="returning-customer">
          <p>
            Returning Customer? <Link to="/login">Click here to login</Link>
          </p>
          <p>
            If you have shopped with us before, please enter your details in the
            boxes below. If you are a new customer, please proceed to the
            Billing & Shipping section.
          </p>
        </div>

        {/* Login Form */}
        <div className="login-form">
          <input type="text" placeholder="Username or Email *" />
          <input type="password" placeholder="Password *" />
        </div>

        {/* Login Actions */}
        <div className="login-actions">
          <button className="login-btn">log in</button>
          <div className="checkbox-container">
            <input type="checkbox" id="create-account" />
            <label htmlFor="create-account">Create an account?</label>
          </div>
        </div>

        {/* Coupon Section */}
        <div className="coupon-section">
          <p>
            Have a coupon?{" "}
            <Link to="/signup">Click here to enter your code</Link>
          </p>
          <input type="text" placeholder="Enter coupon code" />
          <button className="applycouponbtn">Apply Coupon</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
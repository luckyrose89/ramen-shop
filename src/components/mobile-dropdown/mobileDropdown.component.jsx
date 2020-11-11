import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cartIcon.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";

class MobileDropdown extends React.Component {
  render() {
    return (
      <div
        className="fixed left-0 w-full h-auto sm:hidden"
        style={{ marginTop: "200px" }}
      >
        <div className="flex flex-col bg-gray-900 w-full py-4 text-white opacity-75">
          {this.props.currentUser ? (
            <div className="my-2 py-1 pl-10 cursor-pointer hover:bg-gray-500 hover:text-black">
              {this.props.currentUser.username} &#x2193;
              <div></div>
            </div>
          ) : (
            <div className="my-2 py-1 pl-10 cursor-pointer hover:bg-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </div>
          )}
          <div className="my-2 py-1 pl-10 cursor-pointer hover:bg-gray-500 hover:text-black">
            <Link to="/menu">Menu</Link>
          </div>
          <div className="my-2 py-1 pl-10 cursor-pointer hover:bg-gray-500 hover:text-black">
            <Link to="/checkout">
              Checkout <CartIcon />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(MobileDropdown);

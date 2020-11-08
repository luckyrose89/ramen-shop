import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cartIcon.component";
import AccountDropdown from "../account-dropdown/accountDropdown.component";
import CartDropdown from "../cart-dropdown/cartDropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const MobileDropdown = ({ hidden, currentUser }) => {
  return (
    <div className="mt-16 w-full bg-gray-900 py-4 px-10">
      <div>
        {currentUser ? (
          <AccountDropdown />
        ) : (
          <Link to="/login" className="px-3">
            Login
          </Link>
        )}
        <Link to="/menu" className="px-3">
          Menu
        </Link>
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(MobileDropdown);

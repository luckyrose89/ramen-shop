import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import CartIcon from "../cart-icon/cartIcon.component";
import AccountDropdown from "../account-dropdown/accountDropdown.component";
import CartDropdown from "../cart-dropdown/cartDropdown.component";

const Header = ({ currentUser, hidden }) => {
  return (
    <header className="fixed top-0 left-0 flex justify-between items-center w-full h-16 z-10 bg-gray-900 py-4 px-10">
      <div>
        <Link to="/">
          <h1 className="text-white">Ramen Shop</h1>
        </Link>
      </div>
      <div className="text-white">
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
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

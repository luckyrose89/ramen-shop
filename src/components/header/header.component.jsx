import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartIcon from "../cart-icon/cartIcon.component";
import AccountDropdown from "../account-dropdown/accountDropdown.component";
import CartDropdown from "../cart-dropdown/cartDropdown.component";

const Header = ({ currentUser }) => {
  return (
    <header className=" flex justify-between items-center bg-gray-900 py-3 px-10">
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
      <CartDropdown />
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);

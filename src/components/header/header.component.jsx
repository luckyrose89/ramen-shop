import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import CartIcon from "../cart-icon/cartIcon.component";
import AccountDropdown from "../account-dropdown/accountDropdown.component";
import CartDropdown from "../cart-dropdown/cartDropdown.component";

class Header extends React.Component {
  render() {
    return (
      <header className="fixed top-0 left-0 flex justify-between items-center w-full h-16 z-10 bg-gray-900 py-4 px-10">
        <div>
          <Link to="/">
            <h1 className="text-white">Ramen Shop</h1>
          </Link>
        </div>
        <div>
          <svg
            className="h-6 w-6 fill-current text-white sm:hidden"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="hidden sm:block text-white">
          {this.props.currentUser ? (
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
        {this.props.hidden ? null : <CartDropdown />}
      </header>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

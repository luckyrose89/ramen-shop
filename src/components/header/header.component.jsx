import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import onClickOutside from "react-onclickoutside";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartIcon from "../cart-icon/cartIcon.component";
import AccountDropdown from "../account-dropdown/accountDropdown.component";
import MobileDropdown from "../mobile-dropdown/mobileDropdown.component";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleClickOutside = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <header className="fixed top-0 left-0 flex justify-between items-center w-full h-16 z-10 bg-gray-900 py-2 px-10 sm:py-4">
        <div>
          <Link to="/" onClick={this.handleClickOutside}>
            <h1 className="text-white">Ramen Shop</h1>
          </Link>
        </div>
        <div className="sm:hidden">
          <button onClick={this.handleToggle}>
            <svg
              className="h-6 w-6 fill-current text-white"
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
          </button>
        </div>
        {this.state.isOpen ? (
          <MobileDropdown handleToggle={this.handleToggle} />
        ) : null}
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
      </header>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(onClickOutside(Header));

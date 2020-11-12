import React from "react";
import { withRouter, Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cartIcon.component";
import {
  selectCurrentUser,
  selectAdminMode,
} from "../../redux/user/user.selectors";
import { adminModeOff } from "../../redux/user/user.actions";

class MobileDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleUserOptions = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleSignOut = () => {
    this.setState({ isOpen: false });
    auth.signOut();
    if (this.props.adminMode) {
      this.props.dispatch(adminModeOff());
    }
  };

  render() {
    return (
      <div
        className="absolute left-0 w-full h-auto sm:hidden"
        style={{ top: "60px" }}
      >
        <div className="flex flex-col bg-gray-900 py-4 text-white opacity-75">
          {this.props.currentUser ? (
            <div>
              <div className="my-2 py-1 pl-10 hover:bg-gray-500 hover:text-black active:bg-none">
                <button
                  onClick={this.handleUserOptions}
                  className="block w-full text-left focus:outline-none"
                >
                  {this.props.currentUser.username} 🖱
                </button>
              </div>
              {this.state.isOpen ? (
                <div className="pl-10">
                  <div className="py-1 ml-2 hover:underline">
                    <Link to="/profile" onClick={this.props.handleToggle}>
                      Profile
                    </Link>
                  </div>
                  {this.props.adminMode ? (
                    <div className="py-1 ml-2 hover:underline">
                      <Link to="/admin" onClick={this.props.handleToggle}>
                        Manage
                      </Link>
                    </div>
                  ) : null}

                  <button
                    onClick={() => {
                      this.handleSignOut();
                      this.props.handleToggle();
                    }}
                    className="block py-1 w-full text-left ml-2 hover:underline"
                  >
                    Sign Out
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="my-2 py-1 pl-10 hover:bg-gray-500 hover:text-black">
              <button
                className="block w-full text-left focus:outline-none"
                onClick={() => {
                  this.props.history.push("/login");
                  this.props.handleToggle();
                }}
              >
                Login
              </button>
            </div>
          )}
          <div className="my-2 py-1 pl-10 hover:bg-gray-500 hover:text-black">
            <button
              className="block w-full text-left focus:outline-none"
              onClick={() => {
                this.props.history.push("/menu");
                this.props.handleToggle();
              }}
            >
              Menu
            </button>
          </div>
          <div className="my-2 py-1 pl-10 hover:bg-gray-500 hover:text-black">
            <button
              className="block w-full text-left focus:outline-none"
              onClick={() => {
                this.props.history.push("/checkout");
                this.props.handleToggle();
              }}
            >
              Checkout <CartIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  adminMode: selectAdminMode,
});

export default withRouter(connect(mapStateToProps)(MobileDropdown));

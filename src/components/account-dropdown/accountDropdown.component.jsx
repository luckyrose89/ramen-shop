import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import onClickOutside from "react-onclickoutside";

import {
  selectCurrentUser,
  selectAdminMode,
} from "../../redux/user/user.selectors";
import { adminModeOff } from "../../redux/user/user.actions";

class AccountDropdown extends React.Component {
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

  handleSignOut = () => {
    this.setState({ isOpen: false });
    auth.signOut();
    if (this.props.adminMode) {
      this.props.dispatch(adminModeOff());
    }
  };

  render() {
    return (
      <div className="inline-block relative">
        <button
          className="px-3 hover:bg-gray-700 focus:outline-none"
          onClick={this.handleToggle}
        >
          {this.props.currentUser.username} &#x2193;
        </button>
        {this.state.isOpen ? (
          <div className="absolute mt-2 w-32 py-2 bg-white shadow-md">
            <button
              className="px-4 py-2 block w-full text-left text-gray-800 hover:bg-gray-500 hover:text-white focus:outline-none"
              onClick={() => {
                this.props.history.push("/profile");
                this.handleToggle();
              }}
            >
              Profile
            </button>
            {this.props.adminMode ? (
              <button
                className="px-4 py-2 block w-full text-left text-gray-800 hover:bg-gray-500 hover:text-white focus:outline-none"
                onClick={() => {
                  this.props.history.push("/admin");
                  this.handleToggle();
                }}
              >
                Manage
              </button>
            ) : null}
            <button
              className="px-4 py-2 block w-full text-left text-gray-800 hover:bg-gray-500 hover:text-white focus:outline-none"
              onClick={this.handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  adminMode: selectAdminMode,
});

export default withRouter(
  connect(mapStateToProps)(onClickOutside(AccountDropdown))
);

import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectUserDropdown,
  selectAdminMode,
} from "../../redux/user/user.selectors";
import { toggleUserOptions, adminModeOff } from "../../redux/user/user.actions";

class AccountDropdown extends React.Component {
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
          onClick={() => {
            this.props.dispatch(toggleUserOptions());
          }}
        >
          {this.props.currentUser.username} &#x2193;
        </button>
        {!this.props.dropdownOpen ? (
          <div className="absolute mt-2 w-32 py-2 bg-white shadow-md">
            <button
              className="px-4 py-2 block w-full text-left text-gray-800 hover:bg-gray-500 hover:text-white focus:outline-none"
              onClick={() => {
                this.props.history.push("/profile");
                this.props.dispatch(toggleUserOptions());
              }}
            >
              Profile
            </button>
            {this.props.adminMode ? (
              <button
                className="px-4 py-2 block w-full text-left text-gray-800 hover:bg-gray-500 hover:text-white focus:outline-none"
                onClick={() => {
                  this.props.history.push("/admin");
                  this.props.dispatch(toggleUserOptions());
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
  dropdownOpen: selectUserDropdown,
  adminMode: selectAdminMode,
});

export default withRouter(connect(mapStateToProps)(AccountDropdown));

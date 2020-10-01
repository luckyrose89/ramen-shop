import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

class AccountDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  handleSignOut = () => {
    this.setState({ isOpen: false });
    auth.signOut();
  };

  render() {
    return (
      <div className="inline-block relative">
        <button
          className="px-3 hover:bg-gray-700 focus:outline-none"
          onClick={this.handleClick}
        >
          {this.props.currentUser.username} &#x2193;
        </button>
        {this.state.isOpen ? (
          <div className="absolute mt-2 w-32 py-2 bg-white shadow-md">
            <Link
              className="px-4 py-2 block text-gray-800 hover:bg-gray-500 hover:text-white"
              to="/profile"
            >
              Profile
            </Link>
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
});

export default connect(mapStateToProps)(AccountDropdown);

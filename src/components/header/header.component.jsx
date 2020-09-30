import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

class Header extends React.Component {
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
      <header className=" flex justify-between items-center bg-gray-900 py-3 px-10">
        <div>
          <Link to="/">
            <h1 className="text-white">Ramen Shop</h1>
          </Link>
        </div>
        <div className="text-white">
          {this.props.currentUser ? (
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
          ) : (
            <Link to="/login" className="px-3">
              Login
            </Link>
          )}
          <Link to="/menu" className="px-3">
            Menu
          </Link>
          <Link to="/checkout" className="px-3 align-middle">
            <button className="h-6 w-6">
              <svg
                className="fill-current"
                viewBox="0 0 512.003 512.003"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m503.995 105.373c-6.868-8.498-17.076-13.371-28.004-13.371h-390.254l-3.485-24.976c-2.468-17.686-17.796-31.024-35.655-31.024h-30.597c-8.836 0-16 7.164-16 16s7.164 16 16 16h30.597c1.984 0 3.688 1.482 3.961 3.447l43.189 309.529c2.468 17.687 17.796 31.024 35.655 31.024h17.349c-1.776 5.008-2.752 10.391-2.752 16 0 26.467 21.533 48 48 48s48-21.533 48-48c0-5.609-.976-10.992-2.752-16h85.504c-1.776 5.008-2.752 10.391-2.752 16 0 26.467 21.533 48 48 48s48-21.533 48-48c0-5.609-.976-10.992-2.752-16h34.753c8.836 0 16-7.164 16-16s-7.164-16-16-16h-318.597c-1.984 0-3.688-1.482-3.961-3.447l-3.984-28.553h315.102c16.858 0 31.663-11.965 35.205-28.458l39.429-183.997c2.291-10.681-.333-21.679-7.199-30.174zm-295.995 322.629c0 8.822-7.178 16-16 16s-16-7.178-16-16 7.178-16 16-16 16 7.177 16 16zm176 0c0 8.822-7.178 16-16 16s-16-7.178-16-16 7.178-16 16-16 16 7.177 16 16zm95.905-299.163-39.428 183.993c-.394 1.836-2.042 3.169-3.917 3.169h-319.568l-26.79-192h385.788c1.583 0 2.569.808 3.117 1.486.547.677 1.129 1.808.798 3.352z" />
                </g>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);

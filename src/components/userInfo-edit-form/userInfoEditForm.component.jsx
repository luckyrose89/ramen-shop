import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { updateUserDocument } from "../../firebase/firebase.utils";
import { userEditMode } from "../../redux/user/user.actions";

class UserInfoEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      firstname: this.props.currentUser.firstname,
      lastname: this.props.currentUser.lastname,
      email: this.props.currentUser.email,
      address: this.props.currentUser.address,
      error: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUserDocument(this.props.currentUser.id, this.state);
    } catch (error) {
      this.setState({
        error: error.code,
      });
    }
    this.props.dispatch(userEditMode());
  };

  render() {
    return (
      <div className="relative max-w-xl mx-auto shadow-lg h-auto w-full py-8 px-8 text-sm sm:text-base">
        <form className="mt-2" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="my-2 py-1 px-1 mt-3 w-full border-solid border-b border-gray-500"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
            aria-label="Username"
            autoFocus
            required
          />
          <div className="sm:flex">
            <input
              type="text"
              className="my-2 py-1 px-1 w-full sm:w-1/2 border-solid border-b border-gray-500 mr-2"
              value={this.state.firstname}
              onChange={this.handleChange}
              name="firstname"
              aria-label="First Name"
              required
            />
            <input
              type="text"
              className="my-2 py-1 px-1 w-full sm:w-1/2 border-solid border-b border-gray-500"
              value={this.state.lastname}
              onChange={this.handleChange}
              name="lastname"
              aria-label="Last Name"
              required
            />
          </div>
          <input
            type="text"
            className="my-2 py-1 px-1 w-full border-solid border-b border-gray-500"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            aria-label="Email"
            required
          />
          <input
            type="text"
            className="my-2 py-1 px-1 w-full border-solid border-b border-gray-500"
            value={this.state.address}
            onChange={this.handleChange}
            name="address"
            aria-label="Address"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 mt-5 mr-5 py-1 px-2 text-green-800 font-bold"
          >
            Done
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UserInfoEditForm);

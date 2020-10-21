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
          <div className="my-2 flex flex-col">
            <label className="px-1 text-sm text-gray-900 font-bold">
              Username
            </label>
            <input
              type="text"
              className="py-1 px-1 w-full border-solid border-b border-gray-500"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
              required
            />
          </div>
          <div className="sm:flex">
            <div className="my-2 flex flex-col w-full sm:w-1/2">
              <label className="px-1 text-sm text-gray-900 font-bold">
                First Name
              </label>
              <input
                type="text"
                className="py-1 px-1 border-solid border-b border-gray-500 mr-2"
                value={this.state.firstname}
                onChange={this.handleChange}
                name="firstname"
                required
              />
            </div>
            <div className="my-2 flex flex-col w-full sm:w-1/2">
              <label className="px-1 text-sm text-gray-900 font-bold">
                Last Name
              </label>
              <input
                type="text"
                className="py-1 px-1 border-solid border-b border-gray-500"
                value={this.state.lastname}
                onChange={this.handleChange}
                name="lastname"
                required
              />
            </div>
          </div>
          <div className="my-2 flex flex-col">
            <label className="px-1 text-sm text-gray-900 font-bold">
              Email
            </label>
            <input
              type="text"
              className="py-1 px-1 w-full border-solid border-b border-gray-500"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              required
            />
          </div>
          <div className="my-2 flex flex-col">
            <label className="px-1 text-sm text-gray-900 font-bold">
              Address
            </label>
            <input
              type="text"
              className="py-1 px-1 w-full border-solid border-b border-gray-500"
              value={this.state.address}
              onChange={this.handleChange}
              name="address"
              required
            />
          </div>
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

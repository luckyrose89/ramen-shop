import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

class UserInfoEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      error: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="relative max-w-xl mx-auto shadow-lg h-auto w-full py-8 px-8 text-sm sm:text-base">
        <form>
          <input
            type="text"
            className="my-2 py-1 mt-3 w-full border-solid border-b border-gray-500"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
            autoFocus
          />
          <div className="sm:flex">
            <input
              type="text"
              className="my-2 py-1 w-full sm:w-1/2 border-solid border-b border-gray-500 mr-2"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={this.handleChange}
              name="firstname"
            />
            <input
              type="text"
              className="my-2 py-1 w-full sm:w-1/2 border-solid border-b border-gray-500"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={this.handleChange}
              name="lastname"
            />
          </div>
          <input
            type="text"
            className="my-2 py-1 w-full border-solid border-b border-gray-500"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          />
          <input
            type="text"
            className="my-2 py-1 w-full border-solid border-b border-gray-500"
            placeholder="Address"
            value={this.state.address}
            onChange={this.handleChange}
            name="address"
          />
          <button className="absolute top-0 right-0 mt-5 mr-5 my-2 py-1 px-2 text-green-800 font-bold">
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

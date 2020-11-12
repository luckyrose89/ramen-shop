import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { updateUserDocument } from "../../firebase/firebase.utils";

import FormInputTwo from "../form-input-v2/formInputTwo.component";

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
    this.props.handleCancelEdit();
  };

  render() {
    return (
      <div className="relative max-w-xl mx-auto shadow-lg h-auto w-full py-8 px-8 text-sm sm:text-base">
        <form className="mt-2" onSubmit={this.handleSubmit}>
          <FormInputTwo
            name="username"
            type="text"
            label="Username"
            value={this.state.username}
            handleChange={this.handleChange}
          />
          <div className="sm:flex">
            <div className="w-full sm:w-1/2 mr-2">
              <FormInputTwo
                name="firstname"
                type="text"
                label="First Name"
                value={this.state.firstname}
                handleChange={this.handleChange}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <FormInputTwo
                name="lastname"
                type="text"
                label="Last Name"
                value={this.state.lastname}
                handleChange={this.handleChange}
              />
            </div>
          </div>
          <FormInputTwo
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInputTwo
            name="address"
            type="text"
            label="Address"
            value={this.state.address}
            handleChange={this.handleChange}
          />
          <div className="absolute top-0 right-0 mt-5 mr-5 ">
            <button
              type="submit"
              className="py-1 px-2 text-green-800 font-bold hover:bg-green-800 hover:text-white"
            >
              Done
            </button>
            <button
              onClick={this.props.handleCancelEdit}
              className="py-1 px-2 text-red-600 font-bold hover:bg-red-800 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UserInfoEditForm);

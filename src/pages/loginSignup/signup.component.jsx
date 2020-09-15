import React from "react";
import FormInput from "../../components/form-input/formInput.component";

class SignupPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="max-w-sm mx-auto mt-20 px-5">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            type="text"
            label="Username"
            value={this.state.username}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignupPage;

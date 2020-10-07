import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import FormInput from "../../components/form-input/formInput.component";

// conditionally render login or signup form
class LoginPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "", error: "" });
    } catch (error) {
      console.log(error);
      this.setState({ error: error });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="max-w-sm mx-auto mt-20 py-10 px-5">
        <form onSubmit={this.handleSubmit}>
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
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <Link
              to="/signup"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              New User? Sign up now
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;

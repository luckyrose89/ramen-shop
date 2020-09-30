import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import HomePage from "./pages/homepage/homepage.component";
import MenuPage from "./pages/menu/menupage.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import LoginPage from "./pages/loginSignup/login.component";
import Header from "./components/header/header.component";
import SignupPage from "./pages/loginSignup/signup.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/menu" component={MenuPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <LoginPage />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignupPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

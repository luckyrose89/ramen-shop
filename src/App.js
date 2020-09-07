import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import MenuPage from "./pages/menu/menupage.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import LoginPage from "./pages/loginSignup/login.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={MenuPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;

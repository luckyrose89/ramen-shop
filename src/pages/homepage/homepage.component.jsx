import React from "react";
import { withRouter } from "react-router-dom";

import "./homepage.styles.scss";

const HomePage = ({ history }) => {
  return (
    <div className="homepage">
      <div className="announcement w-3/4 sm:w-1/2 bg-white text-center px-4 py-4">
        <h1 className="text-red-600 font-semibold sm:text-lg py-2">
          Welcome to Ramen Shop
        </h1>
        <p className="py-2">The best ramen bowl is a click away</p>
        <button
          onClick={() => {
            history.push("/menu");
          }}
          className="my-2 px-2 py-2 text-white bg-red-600 hover:bg-red-800"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default withRouter(HomePage);

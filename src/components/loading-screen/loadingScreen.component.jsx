import React from "react";

import "./loadingScreen.styles.scss";
import RamenBowl from "../../assets/images/ramen-loading.gif";

const LoadingScreen = () => {
  return (
    <div className="loading z-20 bg-gray-900">
      <div className="gif">
        <img src={RamenBowl} alt="ramen bowl gif" />
        <p className="py-2 text-white capitalize">
          Servers are fetching requested items...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;

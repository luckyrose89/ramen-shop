import React from "react";
import "../homepage/homepage.styles.scss";

const ErrorPage = () => {
  return (
    <div className="text-center bg-gray-900">
      <div className="announcement bg-white">
        <h1 className="font-bold text-black">Error 404</h1>
        <p className="text-red-500">OOPS! PAGE NOT FOUND</p>
      </div>
    </div>
  );
};

export default ErrorPage;

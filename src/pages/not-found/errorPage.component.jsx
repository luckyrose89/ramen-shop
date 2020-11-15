import React from "react";
import "./errorPage.styles.scss";

const ErrorPage = () => {
  return (
    <div className="error bg-gray-900">
      <div className="announcement w-2/3 sm:w-1/2 bg-white text-center px-4 py-4">
        <h1 className="font-bold text-black py-2">Error 404</h1>
        <p className="text-red-500 py-2">OOPS! PAGE NOT FOUND</p>
      </div>
    </div>
  );
};

export default ErrorPage;

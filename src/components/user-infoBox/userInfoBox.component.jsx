import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

const UserInfoBox = ({ currentUser }) => {
  return (
    <div className="relative max-w-xl mx-auto shadow-lg h-auto w-full py-8 px-8 text-sm sm:text-base">
      <h2 className="text-lg font-bold text-gray-800">My Account</h2>
      <div className="my-2 py-1 w-full border-solid border-b border-gray-500">
        {currentUser.username}
      </div>
      <div className="my-2 py-1 w-full border-solid border-b border-gray-500">
        {currentUser.firstname} {currentUser.lastname}
      </div>
      <div className="my-2 py-1 w-full border-solid border-b border-gray-500">
        {currentUser.email}
      </div>
      <div className="my-2 py-1 w-full border-solid border-b border-gray-500 truncate">
        {currentUser.address}
      </div>
      <button className=" absolute top-0 right-0 mt-5 mr-5 my-2 py-1 px-2 text-green-800 font-bold">
        EDIT
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UserInfoBox);

import React from "react";

const DeletePopup = ({ closeModal, deleteMenuItem }) => {
  return (
    <div className="max-w-lg mx-auto mt-56 z-40 bg-white px-5 py-10 text-center">
      <h2 className="py-2 font-bold text-red-900">Attention</h2>
      <p>Do you want to delete this item?</p>
      <div className="py-4">
        <button
          onClick={() => {
            deleteMenuItem();
            closeModal();
          }}
          className="mr-4 px-4 py-1 bg-green-500 text-white hover:bg-green-800"
        >
          Yes
        </button>
        <button
          onClick={() => closeModal()}
          className="px-4 py-1 bg-red-500 text-white hover:bg-red-700"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeletePopup;

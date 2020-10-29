import React from "react";

class AdminPage extends React.Component {
  componentDidMount = () => {
    document.title = "Ramen Shop - Admin Dashboard";
  };

  render() {
    return (
      <div className="max-w-2xl mx-auto my-20 px-5 py-10">
        <h2 className="text-center sm:text-2xl font-bold text-red-800">
          Admin Dashboard
        </h2>
        <div className="text-center mt-10">
          <button className="px-2 py-2 bg-green-700 text-white font-bold text-sm shadow-md hover:bg-green-900">
            + Add New item
          </button>
        </div>
      </div>
    );
  }
}

export default AdminPage;

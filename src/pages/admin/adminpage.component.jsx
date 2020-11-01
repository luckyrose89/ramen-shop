import React from "react";

import AddItem from "../../components/add-item/addItem.component";

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
          <AddItem />
        </div>
      </div>
    );
  }
}

export default AdminPage;

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getMenuItems } from "../../redux/menu/menu.actions";
import { selectMenuItems } from "../../redux/menu/menu.selectors";

import AddItem from "../../components/add-item/addItem.component";
import AdminMenuItem from "../../components/admin-menu-item/adminMenuItem.component";
import ModalBackground from "../../components/modal-background/modalBackground.component";
import DeletePopup from "../../components/delete-popup/deletePopup.component";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeletePopup: false,
      showEditPopup: false,
    };
  }
  componentDidMount = () => {
    document.title = "Ramen Shop - Admin Dashboard";
    this.props.getMenuItems();
  };

  handleEditButton = () => {
    alert("I clicked edit!");
  };

  handleDeleteButton = () => {
    this.setState({
      showDeletePopup: true,
    });
  };

  closeModal = () => {
    this.setState({
      showDeletePopup: false,
      showEditPopup: false,
    });
  };

  render() {
    const menuItems = this.props.menu;
    const { showEditPopup, showDeletePopup } = this.state;
    if (menuItems === null) {
      return <div className="px-5 py-10 mt-20">Loading...</div>;
    }

    return (
      <div className="max-w-6xl mx-auto my-20 px-5 py-10">
        <h2 className="text-center sm:text-2xl font-bold text-red-800">
          Admin Dashboard
        </h2>
        <div className="text-center mt-10">
          <AddItem />
        </div>
        <div className="flex flex-wrap -mx-4 overflow-hidden my-10">
          {menuItems.map((item) => (
            <AdminMenuItem
              key={item.id}
              item={item}
              handleEditButton={this.handleEditButton}
              handleDeleteButton={this.handleDeleteButton}
            />
          ))}
        </div>
        {showDeletePopup ? (
          <ModalBackground>
            <DeletePopup closeModal={this.closeModal} />
          </ModalBackground>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  menu: selectMenuItems,
});

const mapDispatchToProps = (dispatch) => ({
  getMenuItems: () => dispatch(getMenuItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);

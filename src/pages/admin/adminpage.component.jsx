import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getMenuItems } from "../../redux/menu/menu.actions";
import { selectMenuItems } from "../../redux/menu/menu.selectors";
import {
  deleteMenuItemDocument,
  updateMenuItemDocument,
} from "../../firebase/firebase.utils";

import AddItem from "../../components/add-item/addItem.component";
import AdminMenuItem from "../../components/admin-menu-item/adminMenuItem.component";
import ModalBackground from "../../components/modal-background/modalBackground.component";
import DeletePopup from "../../components/delete-popup/deletePopup.component";
import EditPopup from "../../components/edit-popup/editPopup.component";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeletePopup: false,
      showEditPopup: false,
      selectedItem: null,
    };
  }
  componentDidMount = () => {
    document.title = "Ramen Shop - Admin Dashboard";
    this.props.getMenuItems();
  };

  handleEditButton = (item) => {
    this.setState({
      showEditPopup: true,
      selectedItem: item,
    });
  };

  handleDeleteButton = (item) => {
    this.setState({
      showDeletePopup: true,
      selectedItem: item,
    });
  };

  deleteMenuItem = async () => {
    const itemToDelete = this.state.selectedItem;
    await deleteMenuItemDocument(itemToDelete.id);
    this.setState({
      selectedItem: null,
    });
    this.props.getMenuItems();
  };

  editMenuItem = async (data) => {
    const itemToUpdate = this.state.selectedItem;
    await updateMenuItemDocument(itemToUpdate.id, data);
    this.setState({
      selectedItem: null,
    });
    this.closeModal();
    this.props.getMenuItems();
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
            <DeletePopup
              closeModal={this.closeModal}
              deleteMenuItem={this.deleteMenuItem}
            />
          </ModalBackground>
        ) : null}
        {showEditPopup ? (
          <ModalBackground>
            <EditPopup
              closeModal={this.closeModal}
              item={this.state.selectedItem}
              editMenuItem={this.editMenuItem}
            />
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

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { getOrderHistoryDocuments } from "../../firebase/firebase.utils";
import UserInfoBox from "../../components/user-infoBox/userInfoBox.component";
import OrderHistoryItem from "../../components/order-history-item/orderHistoryItem.component";
import UserInfoEditForm from "../../components/userInfo-edit-form/userInfoEditForm.component";
import LoadingScreen from "../../components/loading-screen/loadingScreen.component";

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderHistory: [],
      userEditingMode: false,
    };
  }

  handleToggle = () => {
    this.setState({
      userEditingMode: !this.state.userEditingMode,
    });
  };

  handleCancelEdit = () => {
    this.setState({
      userEditingMode: false,
    });
  };

  componentDidMount = async () => {
    document.title = "Ramen Shop - User Page";
    const currentUser = this.props.currentUser;
    const orderHistoryRefs = await getOrderHistoryDocuments(currentUser.id);
    const result = [];
    orderHistoryRefs.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
    this.setState({
      orderHistory: result,
    });
  };

  render() {
    const orderHistoryItems = this.state.orderHistory;
    if (orderHistoryItems.length === 0) {
      return <LoadingScreen />;
    }
    return (
      <div className="max-w-2xl mx-auto my-20 px-5 py-10">
        {this.state.userEditingMode ? (
          <UserInfoEditForm handleCancelEdit={this.handleCancelEdit} />
        ) : (
          <UserInfoBox handleToggle={this.handleToggle} />
        )}
        <p className="px-8 my-8 font-bold text-gray-800 sm:text-md">
          My Recent Orders
        </p>
        {orderHistoryItems.map((item) => (
          <OrderHistoryItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UserPage);

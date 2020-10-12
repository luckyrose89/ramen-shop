import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { getOrderHistoryDocuments } from "../../firebase/firebase.utils";
import UserInfoBox from "../../components/user-infoBox/userInfoBox.component";
import OrderHistoryItem from "../../components/order-history-item/orderHistoryItem.component";

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderHistory: [],
    };
  }

  componentDidMount = async () => {
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
    return (
      <div className="max-w-2xl mx-auto my-20 px-5 py-10">
        <UserInfoBox />
        <p className="px-8 my-8 font-bold text-gray-800 sm:text-md">
          My Recent Orders
        </p>
        {orderHistoryItems.length === 0 ? (
          <div className="px-8 my-8 text-center">Loading...</div>
        ) : (
          orderHistoryItems.map((item) => (
            <OrderHistoryItem key={item.id} item={item} />
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UserPage);

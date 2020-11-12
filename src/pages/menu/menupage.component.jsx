import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartUpdate from "../../components/cart-update/cartUpdate.component";

import Category from "../../components/category/category.component";
import LoadingScreen from "../../components/loading-screen/loadingScreen.component";
import { getMenuItems } from "../../redux/menu/menu.actions";
import { selectMenuItems } from "../../redux/menu/menu.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";

class MenuPage extends React.Component {
  componentDidMount = () => {
    document.title = "Ramen Shop - Menu";
    this.props.getMenuItems();
  };

  filterItemsByCategory = (category, itemsArray) => {
    let itemObj = { category: category, items: [] };
    itemObj.items = itemsArray.filter((item) => item.category === category);
    return itemObj;
  };

  render() {
    const menuItems = this.props.menu;
    if (menuItems === null) {
      return (
        <div className="mt-16">
          <LoadingScreen />
        </div>
      );
    }

    const sortedCartItems = this.props.cartItems.sort(function (x, y) {
      return x.timestamp - y.timestamp;
    });
    const lastItemAdded = sortedCartItems[sortedCartItems.length - 1];
    const appetizers = this.filterItemsByCategory("appetizers", menuItems);
    const noodles = this.filterItemsByCategory("noodles", menuItems);
    const sushi = this.filterItemsByCategory("sushi", menuItems);
    return (
      <div>
        <div className="mt-16 px-10 py-10">
          <Category category={appetizers} />
          <Category category={noodles} />
          <Category category={sushi} />
        </div>
        {this.props.cartItems.length > 0 ? (
          <CartUpdate currentCartItem={lastItemAdded} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  menu: selectMenuItems,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  getMenuItems: () => dispatch(getMenuItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Category from "../../components/category/category.component";
import { getMenuItems } from "../../redux/menu/menu.actions";
import { selectMenuItems } from "../../redux/menu/menu.selectors";

class MenuPage extends React.Component {
  componentDidMount = async () => {
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
      return <div className="px-5 py-10 mt-20">Loading...</div>;
    }

    const appetizers = this.filterItemsByCategory("appetizers", menuItems);
    const noodles = this.filterItemsByCategory("noodles", menuItems);
    const sushi = this.filterItemsByCategory("sushi", menuItems);

    return (
      <div className="px-5 py-10 mt-20">
        <Category category={appetizers} />
        <Category category={noodles} />
        <Category category={sushi} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);

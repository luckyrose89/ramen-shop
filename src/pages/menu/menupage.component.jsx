import React from "react";
import axios from "axios";
import Category from "../../components/category/category.component";

class MenuPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [],
    };
  }

  componentDidMount = async () => {
    try {
      const menuData = await axios.get(
        "http://localhost:5000/ramen-shop/us-central1/api"
      );
      this.setState({
        menuItems: menuData.data.menu,
      });
    } catch (error) {
      console.log(error);
    }
  };

  filterItemsByCategory = (category, itemsArray) => {
    let itemObj = { category: category, items: [] };
    itemObj.items = itemsArray.filter((item) => item.category === category);
    return itemObj;
  };

  render() {
    const menuItems = this.state.menuItems;
    const appetizers = this.filterItemsByCategory("appetizers", menuItems);
    const noodles = this.filterItemsByCategory("noodles", menuItems);
    const sushi = this.filterItemsByCategory("sushi", menuItems);

    if (menuItems.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Category category={appetizers} />
        <Category category={noodles} />
        <Category category={sushi} />
      </div>
    );
  }
}

export default MenuPage;

import React from "react";
import axios from "axios";

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

  filterItemsByCategory = (category) => {};

  render() {
    const items = this.state.menuItems.map((item) => {
      return <div key={item.id}>{item.name}</div>;
    });
    return <div>{items}</div>;
  }
}

export default MenuPage;

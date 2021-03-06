import React from "react";
import FormInputTwo from "../form-input-v2/formInputTwo.component";
import { connect } from "react-redux";

import { getMenuItems } from "../../redux/menu/menu.actions";
import { addMenuItemDocument } from "../../firebase/firebase.utils";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      imageURL: "",
      category: "appetizers",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = this.state;
    data.price = parseFloat(data.price);
    try {
      await addMenuItemDocument(data);
      this.setState({
        name: "",
        price: "",
        description: "",
        imageURL: "",
        category: "appetizers",
      });
      this.props.getMenuItems();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="relative max-w-xl mx-auto shadow-lg h-auto w-full py-8 px-8 text-sm sm:text-base">
        <form className="mt-2 text-left" onSubmit={this.handleSubmit}>
          <div className="sm:flex">
            <div className="w-full sm:w-1/2 mr-2">
              <FormInputTwo
                type="text"
                name="name"
                label="Dish Name"
                value={this.state.name}
                handleChange={this.handleChange}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <FormInputTwo
                type="number"
                name="price"
                label="Price"
                value={this.state.price}
                handleChange={this.handleChange}
              />
            </div>
          </div>
          <div className="sm:flex">
            <div className="w-full sm:w-1/2 mr-2">
              <FormInputTwo
                type="text"
                name="imageURL"
                label="Image URL"
                value={this.state.imageURL}
                handleChange={this.handleChange}
              />
            </div>
            <div className="my-2 flex flex-col w-full sm:w-1/2">
              <label className="px-1 text-sm text-gray-900 font-bold">
                Category
              </label>
              <select
                className="py-1 px-1 w-full border-solid border-b border-gray-500"
                name="category"
                onChange={this.handleChange}
              >
                <option value="appetizers">Appetizers</option>
                <option value="noodles">Noodles</option>
                <option value="sushi">Sushi</option>
              </select>
            </div>
          </div>
          <FormInputTwo
            type="text"
            name="description"
            label="Description"
            value={this.state.description}
            handleChange={this.handleChange}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 mt-5 mr-5 py-1 px-2 text-green-800 font-bold hover:bg-green-800 hover:text-white"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMenuItems: () => dispatch(getMenuItems()),
});

export default connect(null, mapDispatchToProps)(AddItem);

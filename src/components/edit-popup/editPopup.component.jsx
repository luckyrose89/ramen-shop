import React from "react";
import FormInputTwo from "../form-input-v2/formInputTwo.component";

class EditPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.item.name,
      price: this.props.item.price,
      description: this.props.item.description,
      imageURL: this.props.item.imageURL,
      category: this.props.item.category,
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    data.price = parseFloat(data.price);

    this.props.editMenuItem(data);
  };

  render() {
    return (
      <div className="max-w-xl mx-auto shadow-lg h-auto py-10 px-5  mt-24 z-40 bg-white">
        <form onSubmit={this.handleSubmit}>
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
            <div className="w-full sm:w-1/2 mr-2">
              <FormInputTwo
                type="text"
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
          <div className="py-4">
            <button
              type="submit"
              className="mr-5 py-1 px-2 bg-green-500 hover:bg-green-800 text-white"
            >
              Add
            </button>
            <button
              onClick={() => this.props.closeModal()}
              className="py-1 px-2 bg-red-500 hover:bg-red-700 text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPopup;

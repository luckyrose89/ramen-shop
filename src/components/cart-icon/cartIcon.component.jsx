import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import onClickOutside from "react-onclickoutside";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import CartDropdown from "../cart-dropdown/cartDropdown.component";

class CartIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggleCart = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleClickOutside = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div
        className="inline-block relative sm:px-3 align-bottom cursor-pointer"
        onClick={this.handleToggleCart}
      >
        <div>
          <svg
            className="h-6 w-6 fill-current text-white"
            viewBox="-35 0 512 512.00102"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0" />
          </svg>
          <span className="absolute top-0 left-0 text-sm pt-1 ml-2 sm:pl-3">
            {this.props.itemCount}
          </span>
        </div>
        {this.state.isOpen ? <CartDropdown /> : null}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(onClickOutside(CartIcon));

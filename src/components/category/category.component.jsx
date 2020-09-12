import React from "react";
import MenuItem from "../menu-item/menuItem.component";

const Category = (props) => {
  console.log(props);
  return (
    <div className="mb-24">
      <h2 className="mb-5 pl-3 capitalize text-center sm:text-left text-base underline sm:text-xl">
        {props.category.category}
      </h2>
      <div>
        {props.category.items.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Category;

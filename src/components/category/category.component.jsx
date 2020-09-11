import React from "react";
import MenuItem from "../menu-item/menuItem.component";

const Category = (props) => {
  console.log(props);
  return (
    <div className="mb-5">
      <h2 className="mb-8 capitalize">{props.category.category}</h2>
      <div className="flex flex-wrap">
        {props.category.items.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Category;

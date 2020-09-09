import React from "react";
import MenuItem from "../menu-item/menuItem.component";

const Category = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.category.category}</h2>
      <div>
        {props.category.items.map((item) => {
          return <MenuItem {...item} />;
        })}
      </div>
    </div>
  );
};

export default Category;

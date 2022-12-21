import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import NavDropdown from "react-bootstrap/NavDropdown";

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  const { categories } = state;
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  // maps through the category names and turn them into a Dropdown link formatted as a button
  return (
    <div>
      <NavDropdown
        className="text-white fs-5 mx-3"
        style={{ width: "40px" }}
        title="Products"
        id="basic-nav-dropdown"
      >
        {categories.map((item) => (
          <NavDropdown.Item
            style={{ textDecoration: "none", color: "#000000" }}
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.name}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </div>
  );
}

export default CategoryMenu;

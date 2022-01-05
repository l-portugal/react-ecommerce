import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { getAllCategories } from "../../app/services/productServices";
import { withRouter } from "react-router";

export const ListCategories = withRouter(({ history }) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategories(categories))
  }, [])

  const handleClickFilter = (category) => {
    history.push(`/products/${category}`);
  };

  return (
    <NavDropdown title="Categorías" id="basic-nav-dropdown">

      {
        categories.map((category, index) =>
          <NavDropdown.Item onClick={() => handleClickFilter(category)} key={index}>
            {category.toUpperCase()}
          </NavDropdown.Item>
        )
      }

    </NavDropdown>
  )
})
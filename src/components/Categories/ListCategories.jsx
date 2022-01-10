import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { getAllCategories } from "../../app/services/productServices";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../redux/actions/products/productActions";

export const ListCategories = withRouter(({ history }) => {

  const [categories, setCategories] = useState([]);

  const dispatcher = useDispatch()

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategories(categories))
  }, [])

  const handleClickFilter = (category) => {
    // history.push(`/products/${category}`);
    dispatcher(filterByCategory(category))
  };

  return (
    <NavDropdown title="Categorías" id="basic-nav-dropdown">

      <NavDropdown.Item onClick={ () => handleClickFilter('all') }>
        TODAS
      </NavDropdown.Item>
      
      {
        categories.map((category, index) =>
          <NavDropdown.Item onClick={ () => handleClickFilter(category) } key={index}>
            {category.toUpperCase()}
          </NavDropdown.Item>
        )
      }

    </NavDropdown>
  )
})
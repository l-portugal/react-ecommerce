import React from 'react'

export const CartItem = ({index, id,  title, price, category}) => (
    // <Dropdown.Item href="#">{title} - $ {price} - {category}</Dropdown.Item>
    <tr>
      <td>{ index + 1 }</td>
      <td>{ title }</td>
      <td>{ category }</td>
      <td>$ { price }</td>
    </tr>
)
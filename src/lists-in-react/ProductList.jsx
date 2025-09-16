import React from 'react'

//Array of user objects
const products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 699.99 },
  { id: 3, name: "Tablet", price: 399.99 },
];

export default function ProductList() {
  return (
    <div>
        <h2>Product List</h2>
        <ul>
            {products.map((product)=>{
                return <li key={product.id}>{product.name} - ${product.price}</li>
            })}
        </ul>
    </div>
  )
}

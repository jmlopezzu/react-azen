import React from 'react';

const products = [
  { title: 'React Basics', isFruit: false, id: 1 },
  { title: 'React Hooks', isFruit: false, id: 2 },
  { title: 'React Integration to Backend', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen',
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <div className='shopping-list'>
      <h2>Lista de cosas por hacer</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default ShoppingList;

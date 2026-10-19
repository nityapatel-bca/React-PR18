import React, { useState } from 'react';

function ProductUpdate() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Headphones', price: 1500 }
  ]);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  function selectProduct(product) {
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
  }

  function updateProduct(e) {
    e.preventDefault();

    setProducts(products.map(product =>
      product.id === Number(id)
        ? { ...product, name: name, price: Number(price) }
        : product
    ));

    setId('');
    setName('');
    setPrice('');

    alert('Product Updated Successfully!');
  }

  return (
    <div>
      <h1>Product Management</h1>

      <h2>Product List</h2>

      {products.map(product => (
        <div key={product.id}>
          <p>
            {product.name} - ₹{product.price}{' '}
            <button onClick={() => selectProduct(product)}>
              Edit
            </button>
          </p>
        </div>
      ))}

      <hr />

      <h2>Update Product</h2>

      <form onSubmit={updateProduct}>
        <label>Product ID: </label>
        <input type="text" value={id} readOnly />
        <br /><br />

        <label>Product Name: </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <br /><br />

        <label>Product Price: </label>
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />
        <br /><br />

        <button type="submit" disabled={!id}>
          Update Product
        </button>
      </form>
    </div>
  );
}

export default ProductUpdate;
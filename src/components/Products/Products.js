import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import shortid from 'shortid';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
        {products.map(products => <Product
        key={shortid()}
        id={products.id}
        name={products.name}
        title={products.title}
        colors={products.colors}
        sizes={products.sizes}
        basePrice={products.basePrice} />)}
    </section>
  );
};

export default Products;
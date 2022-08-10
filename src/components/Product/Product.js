import styles from './Product.module.scss';
import { useState,useMemo } from 'react';
import ProductImg from '../ProductImg/ProductImg';
import ProductForm from '../ProductForm/ProductForm';
const Product = props => {
  const [currentColor,setCurrentColor] = useState(props.colors[0]);
  const [currentSize,setCurrentSize] = useState(props.sizes[0]['name']);
  const addToCart = e =>{
    e.preventDefault();
    console.log("Summary");
    console.log("==========");
    console.log(`Name: ${props.title}`);
    console.log(`Price: ${getPrice(props)}`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
  }


  const getPrice = useMemo(props =>{
   return props=>{
      // console.log('reapeta');
      return props.sizes.find(({name})=> name === currentSize).additionalPrice + props.basePrice;
    }
  },[currentSize]);


  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImg currentColor={currentColor} name={props.name}/>
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{`Price: ${getPrice(props)}$`}</span>
        </header>
        <ProductForm addToCart={addToCart} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} colors={props.colors} sizes={props.sizes} currentSize={currentSize} currentColor={currentColor}/>
      </div>
    </article>
  )
};

export default Product;
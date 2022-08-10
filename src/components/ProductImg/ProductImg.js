import styles from './ProductImg.module.scss';

const ProductImg = ({name,currentColor}) =>{

    return (
        <img 
            className={styles.image}
            alt="Kodilla shirt"
            src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} 
        />
    );
}

export default ProductImg;
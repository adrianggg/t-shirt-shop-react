import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';


const ProductForm = ({setCurrentColor,setCurrentSize,currentSize,currentColor,addToCart,colors,sizes}) => {

    return (
        <form>
            <OptionSize setCurrentSize={setCurrentSize} currentSize={currentSize} sizes={sizes} />
            <OptionColor setCurrentColor={setCurrentColor} currentColor={currentColor} colors={colors}/>

        <Button action={addToCart}
         className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
    );
}

export default ProductForm;
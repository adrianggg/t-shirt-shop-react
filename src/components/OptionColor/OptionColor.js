import styles from './OptionColor.module.scss';
import clsx from 'clsx';
const OptionColor = ({setCurrentColor,colors,currentColor})=>{

    return (
        <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
          <ul className={styles.choices}>
            {colors.map(colors => {
              const prepareColorClassName = color => {
                return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
              }
              return <li key={colors}><button onClick={clickedElement=>{
                clickedElement.preventDefault();
                setCurrentColor(clickedElement.target.value);}} type="button" value={colors} className={clsx(prepareColorClassName(colors),colors === currentColor && styles.active)} /></li>
            })}
          </ul>
        </div>
    )
}

export default OptionColor;
import styles from './MainButton.module.css';

export default function MainButton( {children, length} ) {
    return (
        <button className={`
            ${styles.btn}
            ${styles[length]}
            `}>
            {children}
        </button>
    )
}

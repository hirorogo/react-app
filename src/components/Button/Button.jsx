import styles from "./Button.module.css"

function Button(props) {
    const { type, disabled, onClick, children } = props;
    return (
        <button
            type={type}
            disabled={disabled}
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
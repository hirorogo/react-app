import styles from "./Button.module.css"
function Button(props) {
    const { type, disabled, children, onClick } = props;

    return (
        <button
            type={type}
            disabled={disabled}
            className={styles.button}
            onClick={disabled ? undefined : onClick}
        >
            {children}
        </button>
    )
}

export default Button;
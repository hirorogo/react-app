import styles from "./Button.module.css"

function Button(props) {
    const { type, disabled, onClick, children } = props;
    return (
        <Button type="button" disabled={false} onClick={handleClick}>
            カウント : {count}
        </Button>
    )
}

export default Button;
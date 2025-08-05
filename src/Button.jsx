function Button(props) {
    const{ type } = props

    const handleClick = () =>{
        alert('クリックされました');
    }

    return (
    <button type="button"onClick={handleClick}>クリック</button>
    )
}

export default Button;
import './App.css'
import Button from './Button';

function App() {
  const handleClick = () => {
    console.log("buttoon clicked")
  }
  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={true} onClick={handleClick}>
        <span>ボタン</span>
      </Button>
    </>
  )
}

export default App

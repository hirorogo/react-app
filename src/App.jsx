import './App.css'
import Button from './components/Button/Button';
import Display from './components/Display/Display';
import { useState ,useEffect} from "react"

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log(`Count:`,count)
  }, [count]);
  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick}>
        ボタン
      </Button>
      <Display count={count} />
    </>
  )
}

export default App

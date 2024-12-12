import React ,{useState}from 'react'

type Props = {
  title : string;
  des : string;
}
interface CounterState {
  count : number;
}

const Counter: React.FC<Props> = (props : Props) => {
  const [state,setStatte] = useState<CounterState>({count : 0})

  const increment = () => {
    setStatte({
      count : state.count + 1
    })
  }
  const decrement = () => {
    setStatte({
      count : state.count - 1
    })
  }
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.des}</p>
      </div>
      <h1>{state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
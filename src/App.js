import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, loggedIN } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(loggedIN())}>Login</button>
      {logged ? <h1>this is loggin data {logged}</h1> : ""}

    </div>
  );
}

export default App;

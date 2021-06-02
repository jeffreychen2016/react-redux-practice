import classes from "./Counter.module.css";

// use `useSelector` to select only part of the states needed from the data store
import { useSelector, useDispatch } from "react-redux";
// import { counterActions } from "../store/index";
import { counterActions } from "../store/counter";

const Counter = () => {
  // *** IMPORTANT ***
  // select only `counter` state from the data store
  // when use `useSelector`, it will automatically subscribe the component
  // to the data store

  // the first counter here is the name specified in
  // const store = configureStore({
  //   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  // });
  // the second counter is the state
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  // handlers
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
    // dispatch({ type: "TOGGLE" });
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());

    // dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    // dispatch({ type: "DECREMENT" });
  };

  const increaseHandler = () => {
    // when using toolkit, behind the scence
    // it will call the function with:
    // {type: SOME_UNIQUE_ID, payload: 10}
    dispatch(counterActions.increase(5));
    // dispatch({ type: "INCREASE", amount: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Incrase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

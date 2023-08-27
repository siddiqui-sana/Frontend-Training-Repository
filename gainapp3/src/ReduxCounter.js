import { useDispatch, useSelector } from "react-redux";
const ReduxCounter = () => {
  const dispatch = useDispatch();
  const [count] = useSelector((state) => {
    return [state.count];
  });
  const increaseCount = () => {
    dispatch({ type: "increase" });
  };
  const decreaseCount = () => {
    dispatch({ type: "decrease" });
  };
  const resetCount = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      <button variant="outlined" onClick={increaseCount}>
        Increase
      </button>
      <button variant="outlined" onClick={decreaseCount}>
        Decrease
      </button>
      <button variant="outlined" onClick={resetCount}>
        Reset
      </button>
      Count = {count}
    </div>
  );
};
export default ReduxCounter;
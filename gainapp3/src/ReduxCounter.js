import { useDispatch, useSelector } from "react-redux";
import {increase, decrease} from "./actions/counteractions";
import {add, del} from "./actions/todoactions";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  let step = 4;
  const [count] = useSelector((state) => {
    console.log(state);
    return [state.counter.count];
  });
  const increaseCount = () => {
    console.log(increaseCount);
    dispatch(increase(step));
  };
  const decreaseCount = () => {
    console.log(decreaseCount);
    dispatch(decrease(step));
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
import useCounter from "./hooks/useCounter";
function Counter (){
    const [count, increase, decrease, reset] = useCounter();
    return (
        <div>
            the state variable value = {count}
            <br/>
            the addition of 3 and 5 is {3*5}
            <br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;
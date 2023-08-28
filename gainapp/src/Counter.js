
// const Counter = () =>{
//     let count=0;
//     const increase = () =>{
//         count = count+1;
//     };
//     const decrease = () =>{
//         count = count-1;
//     };
//     const reset = () =>{
//         count=0;
//     };
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increase}>Increase</button>
//             <button onClick={decrease}>Decrease</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }
//Use state hook
import { useState } from "react";
const Counter = () => {
  let [count, setcount] = useState(0);
  const increase = () => {
    setcount(count + 1);
    console.log(count);
  };
  const decrease = () => {
    setcount(count - 1);
    console.log(count); 
  };
  const showCount = () => {
    alert(count);
    console.log(count);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}> Decrease</button>
      <button onClick={showCount}>Show Count</button>
    </div>
  );
};
export default Counter;

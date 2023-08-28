const increase = (step)=>({type:"increase", payload: step});
const decrease = (step)=>({type:"decrease", payload: step});

export {increase, decrease};

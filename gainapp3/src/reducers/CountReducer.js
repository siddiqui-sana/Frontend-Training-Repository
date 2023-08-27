const initialState = {count:0};
const CountReducer = (state=initialState, action) =>{
    if(action.type==='increase'){
        let newState = {...state, count:state.count+1}
        return newState;
    }
    if(action.type==='decrease'){
        let newState = {...state, count:state.count-1}
        return newState;
    }
    if(action.type==='reset'){
        let newState = {...state, count:0}
        return newState;
    }
    return state;
};

export default CountReducer;
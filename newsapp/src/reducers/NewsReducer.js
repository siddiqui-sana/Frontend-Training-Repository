const initialState = [{city:"Kanpur",
news:"Raining", description: "Red Alert"}];
const NewsReducer = (state=initialState, action) =>{
    console.log("state",state, action);
    if(action.type === 'add'){
        let newNews = action.payload;
        let newState = [...state, newNews];
        return newState;
    }
    if(action.type === 'del'){
        let indexToDelete = Number(action.payload);
        let newState = state.filter((val, index) => {
            if(index === indexToDelete) 
            return false;
        return true;
        });
        return newState;
    }
    if(action.type === 'clearall'){
  
        let newState = [];
        return newState;
    }
    // if(action.type === 'fetch_newss'){
    //     let newNewss = action.payload;
    //     let newState = newNewss;
    //     return newState;
    // }
    return state;
};

// export default CountReducer;
export default NewsReducer;
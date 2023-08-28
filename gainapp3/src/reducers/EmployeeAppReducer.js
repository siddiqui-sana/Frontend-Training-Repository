const initialState = [{name:"Sana",age: 23, city: "Hyderabad", salary: 0}];
const EmployeeAppReducer = (state=initialState, action) =>{
    console.log("name",state, action);
    if(action.type === 'add'){
        let newEmployeeApp = action.payload;
        let newState = [...state, newEmployeeApp];
        return newState;
    }
    // if(action.type === 'del'){
    //     let indexToDelete = action.payload;
    //     let newState = state.filter((val, index) => {
    //         if(indexToDelete === action.payload) 
    //         return false;
    //     return true;
    //     });
    //     return newState;
    // }
    if (action.type === "del") {
          let indexTodelete = action.payload;
          console.log(indexTodelete);
          // let newState = state.filter((val, index) => index != indexTodelete);
          let newState = state.filter((val, index) => {
            if (index === indexTodelete) {
              return false;
            }
            return true;
          });
          console.log("newstate", newState);
      
          return newState;
        }

    if(action.type === 'clearall'){
        let newState = [];
        return newState;
    }
    if(action.type === 'fetch_employees'){
        let newEmployeeApp = action.payload;
        let newState = newEmployeeApp;
        return newState;
    }
    return state;
};

// export default CountReducer;
export default EmployeeAppReducer;
import axios from "axios";

// const del = (payload)=>({type:"del", payload});
// const clearall = () => ({type: "clearall"});

// export {add, del, clearall};
const add = (employeeAppObj) => {

    const addEmployeeApp = (dispatch) => {
        axios.post("/employee", employeeAppObj).then((res) => {
            console.log(res.data);
            dispatch(fetchAction());
                // dispatch({type:"fetch_todos",payload:res.data})
        });
    };
    return addEmployeeApp;
};

const del = (indexTodelete) => {
    const deleteEmployeeApp = (dispatch) => {
      axios
        .delete(`/employee/${indexTodelete}`)
        .then((response) => console.log(response));
    };
    return deleteEmployeeApp;
  };

  const clearAll = (indexTodelete) => {
    const clearEmployee = (dispatch) => {
      axios.delete(`/deleteemployee`).then((response) => console.log(response));
    };
    return clearEmployee;
  };

  
const fetchAction = () => {
    const fetchFunc = (dispatch) => {
        axios
        .get("/employee")
        .then((res) => {
            console.log(res.data);
            let employees = res.data;
            dispatch({type: "fetch_employees", payload: employees});
        })
        .catch((err) => {
            console.log(err);
        });
    };
    return fetchFunc;
};
export { add, del, clearAll, fetchAction };
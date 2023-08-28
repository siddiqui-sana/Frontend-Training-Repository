import Employees from "./Employees";



const EmployeeList = ({ employees, deleteEmployeeApp }) => {
    return (
      <>
        {employees.map((val, index) => {
          return <Employees index={index} val={val} deleteEmployeeApp={deleteEmployeeApp} />;
        })}
      </>
    );
  };

  export default EmployeeList;
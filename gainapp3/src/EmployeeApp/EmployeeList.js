import Employees from "./Employees";

const EmployeeList = ({ employees, deleteEmployeeApp }) => {
    return (
        <div className="employee">
        {employees.map((val, index) => {
          return (
            <Employees index={index} val={val} deleteEmployeeApp={deleteEmployeeApp} />
          );
        })}
      </div>
    );
  };

  export default EmployeeList;
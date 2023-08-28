import EmployeeApp from './EmployeeApp/EmployeeApp';
import ReduxTodo from './ReduxTodo';
import ReduxEmployeeApp from './ReduxEmployeeApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ReduxTodo></ReduxTodo> */}
        <ReduxEmployeeApp/>
        {/* <ReduxCounter></ReduxCounter> */}
        {/* <EmployeeApp></EmployeeApp> */}
      </header>
    </div>
  );
}
export default App;

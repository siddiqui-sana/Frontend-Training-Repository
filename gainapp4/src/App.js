import Todo from './Todo/Todo';
import Blog from './ContextExample/Blog';
import Counter from './Counter';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import LazyHome from './lazyndsuspense/LazyHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Blog></Blog>
      <Todo></Todo>
      <Counter></Counter>
      <EmployeeApp></EmployeeApp>
      <Link to="/lazyHome">LazyHome</Link>
      <br/>
      <Routes>
        <Route path="/lazyHome" element={<LazyHome/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

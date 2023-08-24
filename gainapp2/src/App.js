// import logo from './logo.svg';
// import './App.css';
// // import Student from './Student';
// import Todo from './Todo';

// function App() {
//   // let students = ["Kamran", "Sana", "Apporva", "Shri,","Nidhi"];
//   //let todo = ["Sleep Ealy", "Yoga", "Leetcode"]
//   return (
//     <div className="App">
//       <br></br>
//       {/* <Student students={students}/> */}
//       <Todo/>
//     </div>
//   );
// }
//Routing

// import logo from "./logo.svg";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Todo from './Todo';
import Student from './Student';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <a href="/todos">Todos</a>
      <br/>
      <a href="/students">Students</a> */}
      
      <BrowserRouter>
      {/* We use link instead of a because it does does not reload the page */}
      <Link to="/">Home</Link>
      <br/>
      <Link to="/todos">Todos</Link>
      <br/>
      <Link to="/students">Students</Link>
      <br/>
      <Routes>
        <Route path="/todos" element={<Todo/>}/>
        <Route path="/students" element={<Student/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "./News/NewsList";
import ReduxNews from "./ReduxNews";
import Description from "./News/Description";
import Newss from "./News/Newss";
function App() {
  const [newss] = useSelector((state) => {
    // console.log(state.todos);
    return [state];
  });
  // useEffect(() => {}, [NewsList]);
  return (
    <div className="App" >
      <BrowserRouter>
        <Link className="News-List" to="/">
          Home
        </Link>
        <br/>
        <NewsList />
        <Routes>
          <Route path="/" element={<ReduxNews />} />
          <Route path=":id" element={<Newss />}>
            <Route path="description" element={<Description />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
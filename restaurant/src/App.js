import "./App.css";
import { RouterProvider } from "react-router-dom";
// Routes: Act as Container, Route: Connects the pages
import router from "./router";
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

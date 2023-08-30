
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { del } from "../actions/newsactions";
import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewsList from "./NewsList";
const Newss = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const [newss] = useSelector((state) => {
    // console.log(state);
    return [state];
  });
  
  const deleteCityFn = (id) => {
    // console.log("delete in citynews");
    dispatch(del(id));
    navigate("/", { replace: true });
  };
  return (
    <div>
      <p>{newss[id].city}</p>
      <p>{newss[id].news}</p>
      <Link to={`/${id}/description`}>Description</Link>
      <Outlet context={newss[id]}/>
      <Button
        variant="contained"
        className="delete-btn"
        onClick={() => {
          deleteCityFn(id);
        }}
      >
        Delete
      </Button>
    </div>
  );
};
export default Newss;
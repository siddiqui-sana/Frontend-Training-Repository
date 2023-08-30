import Newss from "./Newss";
import { useDispatch, useSelector} from "react-redux";
import {  Link } from "react-router-dom";

const NewsList = ({  deleteNews }) => {
  const [newss] = useSelector((state) => {
    console.log(state);
    return [state];
  });
    return (
      <>
        {newss.map((val, index) => {
          return (<>
          <Link className="city-list" to={`/${index}`}>
          {val.city}
        </Link>
        <br/>
          </>)
        })}
      </>
    );
  };

  export default NewsList;